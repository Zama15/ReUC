import { FileDescriptor } from "../file/FileDescriptor.js";
import * as DomainError from "../errors/index.js";
import { projectRepo } from "@reuc/infrastructure/projectRepo.js";
import * as InfrastructureError from "@reuc/infrastructure/errors/index.js";

/**
 * Uploads a external link resource to a project.
 * @param {object} params
 * @param {string} params.uuidProject - The UUID of the project.
 * @param {string} params.uuidRequestingUser - The UUID of the user uploading.
 * @param {object} params.eLink - The uploaded external link object.
 * @param {string} params.eLink.url - The external link.
 * @param {object} [params.eLink.displayName] - The name to display of the elink
 *
 * @throws {DomainError.NotFoundError}
 * @throws {DomainError.AuthorizationError}
 * @throws {DomainError.ValidationError} If the input data is invalid.
 * @throws {DomainError.BusinessRuleError} If a invalid business rule.
 * @throws {DomainError.DomainError} For any unexpected errors.
 */
export async function uploadProjectExternalLink({
  uuidProject,
  uuidRequestingUser,
  eLink,
}) {
  try {
    const projectData = await projectRepo.getForValidation(uuidProject);
    if (!projectData) {
      throw new DomainError.NotFoundError(
        `Project with UUID '${uuidProject}' could not be found to upload resources to.`,
        { details: { resource: "project", identifier: uuidProject } }
      );
    }

    const teamMembers = projectData.teamMembers.map((tm) => tm.uuidUser);
    if (!teamMembers.includes(uuidRequestingUser)) {
      throw new DomainError.AuthorizationError(
        "Only a team member of the project can upload resources to this project."
      );
    }

    const descriptor = new FileDescriptor({
      name: eLink.displayName,
      modelTarget: "PROJECT",
      purpose: "RESOURCE",
    });

    return await projectRepo.saveFileResource(
      uuidProject,
      uuidRequestingUser,
      resourcePayload
    );
  } catch (err) {
    // if (err instanceof InfrastructureError.ForeignKeyConstraintError) {
    //   const field = err.details?.field || "related resource";

    //   throw new DomainError.BusinessRuleError(
    //     `The upload of the resource failed because the provided '${field}' doest not exist.`,
    //     { cause: err, details: err.details }
    //   );
    // }

    if (err instanceof DomainError.DomainError) throw err;

    if (err instanceof InfrastructureError.InfrastructureError)
      throw new DomainError.DomainError(
        "The upload of the resource could not be completed due to a system error.",
        { cause: err }
      );

    console.error(`Domain error (uploadProjectExternalLink):`, err);
    throw new DomainError.DomainError(
      "An unexpected error occurred while uploading the resource.",
      { cause: err }
    );
  }
}
