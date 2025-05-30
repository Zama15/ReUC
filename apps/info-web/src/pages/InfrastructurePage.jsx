// src/pages/InfrastructurePage.jsx
import Hero from '../components/Hero';
import ArchitectureFlow from '../components/ArchitectureFlow';
import ContentSection from '../components/ContentSection';
import TechStack from '../components/TechStack';
import CodeBlock from '../components/CodeBlock';
import DatabaseTables from '../components/DatabaseTables';

const InfrastructurePage = ({setActiveLayer}) => {
  const technologies = [
    {
      name: 'Prisma ORM',
      description: 'Cliente de base de datos con tipado seguro y soporte para migraciones de esquema'
    },
    {
      name: 'PostgreSQL',
      description: 'Base de datos relacional robusta configurada para la zona horaria UTC'
    },
    {
      name: 'Patrón de Repositorio (Repository Pattern)',
      description: 'Simplifica el acceso a datos proporcionando una forma centralizada y abstracta de gestionar operaciones de datos, separando responsabilidades y mejorando el mantenimiento del código.'
    }
  ];

  const databaseTables = [
    {
      name: 'Users',
      fields: [
        'uuid_user: String (UUID)',
        'email: String (unique)',
        'password: String',
        'firstName: String?',
        'middleName: String?',
        'lastName: String?',
        'userStatus: Int? (FK)',
        'lastLoginIp: String?',
        'lastLoginAt: String?',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'User_Status',
      fields: [
        'user_status_id: Int (ID)',
        'name: String',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Admin',
      fields: [
        'uuid_admin: String (UUID)',
        'uuidUser: String (FK)',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Students',
      fields: [
        'uuid_student: String (UUID)',
        'uuidUser: String (FK)',
        'universityId: String (unique)',
        'averageGrade: Float?',
        'enrollmentYear: DateTime?',
        'studentStatus: Int? (FK)',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Student_Status',
      fields: [
        'student_status_id: Int (ID)',
        'name: String',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Professors',
      fields: [
        'uuid_professor: String (UUID)',
        'uuidUser: String (FK)',
        'universityId: String (unique)',
        'professorRole: Int?',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Professor_Role',
      fields: [
        'professor_role_id: Int (ID)',
        'name: String',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Outsider',
      fields: [
        'uuid_outsider: String (UUID)',
        'uuidUser: String (FK)',
        'organizationName: String?',
        'phoneNumber: String?',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
    {
      name: 'Project_Type',
      fields: [
        'project_type_id: Int (ID)',
        'name: String',
        'estimatedTime: String',
        'minTeamMembersSize: Int',
        'maxTeamMembersSize: Int',
        'minTeamAdvisorsSize: Int',
        'maxTeamAdvisorsSize: Int',
        'createdAt: DateTime',
        'updatedAt: DateTime'
      ]
    },
  ];

  const repositoryCode = `<span class="comment">// Ejemplo de Implementación del Patrón de Repositorio</span>
<span class="keyword">export const</span> <span class="variable">userRepo</span> = {
  <span class="keyword">async</span> <span class="function">findByEmail</span>(<span class="parameter">email</span>) {
    <span class="keyword">return await</span> <span class="variable">db</span>.<span class="property">user</span>.<span class="method">findUnique</span>({ <span class="property">where</span>: { <span class="property">email</span> } });
  },
  <span class="keyword">async</span> <span class="function">findByUuid</span>(<span class="parameter">uuid</span>) {
    <span class="keyword">return await</span> <span class="variable">db</span>.<span class="property">user</span>.<span class="method">findUnique</span>({ <span class="property">where</span>: { <span class="property">uuid_user</span>: <span class="parameter">uuid</span> } });
  },
  <span class="keyword">async</span> <span class="function">save</span>(<span class="parameter">user</span>) {
    <span class="keyword">return await</span> <span class="variable">db</span>.<span class="property">user</span>.<span class="method">create</span>({ <span class="property">data</span>: <span class="parameter">user</span> });
  },
  <span class="keyword">async</span> <span class="function">update</span>(<span class="parameter">uuid</span>, <span class="parameter">updates</span>) {
    <span class="keyword">return await</span> <span class="variable">db</span>.<span class="property">user</span>.<span class="method">update</span>({
      <span class="property">where</span>: { <span class="property">uuid_user</span>: <span class="parameter">uuid</span> },
      <span class="property">data</span>: <span class="parameter">updates</span>
    });
  }
};`;

  return (
    <>
      <Hero 
        title="Capa de Infraestructura"
        description="La base de nuestra arquitectura backend - manejando la persistencia de datos, servicios externos y recursos del sistema"
      />
      
      <ArchitectureFlow activeLayer="infrastructure" setActiveLayer={setActiveLayer} />
      
      <ContentSection icon="🗄️" title="Gestión de Base de Datos">
        <p>La capa de Infraestructura utiliza <strong>Prisma ORM</strong> con <strong>PostgreSQL</strong> para manejar toda la persistencia de datos. Esta capa es responsable de:</p>
        <TechStack technologies={technologies} />
        <CodeBlock code={repositoryCode} />
      </ContentSection>

      <ContentSection icon="🗂️" title="Esquema de Base de Datos">
        <p>Nuestra base de datos sigue un esquema integral diseñado para soportar la gestión de proyectos académicos con control de acceso basado en roles:</p>
        <DatabaseTables tables={databaseTables} />
      </ContentSection>
    </>
  );
};

export default InfrastructurePage;
