import * as ApplicationError from "../errors/index.js";
import { validateUploadLink } from "./validators.js";
import { uploadProjectExternalLink } from "@reuc/domain/project/uploadProjectExternalLink.js";
import * as DomainError from "@reuc/domain/errors/index.js";

/**
 * Uploads an external link resource to a project.
 * @param {object} params
 * @param {string} params.uuidProject - The UUID of the project to relate the upload to.
 * @param {string} params.uuidRequestingUser - The UUID of the user requesting the upload.
 * @param {object} params.body
 * @param {string} params.body.url - The External Link to upload.
 * @param {string} [params.body.displayName] - The name to display on client-side.
 *
 * @throws {ApplicationError.ValidationError} If the input data is invalid.
 * @throws {ApplicationError.NotFoundError}
 * @throws {ApplicationError.AuthorizationError}
 * @throws {ApplicationError.ApplicationError} For other unexpected errors.
 */
export async function uploadLink({ uuidProject, uuidRequestingUser, body }) {
  validateUploadLink(uuidProject, uuidRequestingUser, body);

  try {
    const newResource = await uploadProjectExternalLink({
      uuidProject,
      uuidRequestingUser,
      eLink: {
        displayName: body.displayName,
        url: body.url,
      },
    });

    return { resource: newResource };
  } catch (err) {
    if (err instanceof DomainError.NotFoundError)
      throw new ApplicationError.NotFoundError(
        "The requested resource was not found.",
        { cause: err }
      );

    if (err instanceof DomainError.AuthorizationError)
      throw new ApplicationError.AuthorizationError(
        "User not authorized to perform this action."
      );

    if (err instanceof DomainError.BusinessRuleError)
      throw new ApplicationError.ValidationError(
        "The request violates business rules.",
        { details: err.details, cause: err }
      );

    if (err instanceof DomainError.ValidationError)
      throw new ApplicationError.ValidationError(
        "The resource file data is invalid.",
        { details: err.details, cause: err }
      );

    if (err instanceof DomainError.DomainError)
      throw new ApplicationError.ApplicationError(
        "The request could not be processed due to a server error.",
        { cause: err }
      );

    console.error(`Application Error (project.uploadLink):`, err);
    throw new ApplicationError.ApplicationError(
      "An unexpected error occurred while uploading the resource.",
      { cause: err }
    );
  }
}
