// src/pages/DomainPage.jsx
import Hero from '../components/Hero';
import ArchitectureFlow from '../components/ArchitectureFlow';
import ContentSection from '../components/ContentSection';
import TechStack from '../components/TechStack';
import CodeBlock from '../components/CodeBlock';
import DatabaseTables from '../components/DatabaseTables';

const DomainPage = ({setActiveLayer}) => {
  const technologies = [
    {
      name: 'Orquestación de Lógica de Negocio',
      description: 'Coordina reglas de negocio complejas, validaciones y flujos de trabajo específicos del dominio académico'
    },
    {
      name: 'Modelos de Entidad',
      description: 'Clases que representan los conceptos centrales del negocio: Usuario, Estudiante, Profesor, Outsider'
    },
    {
      name: 'Control de Acceso Basado en Roles',
      description: 'Sistema de autenticación y autorización que maneja diferentes tipos de usuarios y sus permisos específicos'
    },
    {
      name: 'Gestión de Tokens',
      description: 'Generación y validación de tokens JWT para sesiones seguras con refreshToken de 7 días'
    }
  ];

  const roleAssignment = [
    {
      name: 'Sin University ID → Externo',
      description: ''
    },
    {
      name: '4 Dígitos → Profesor',
      description: ''
    },
    {
      name: '8 Dígitos → Estudiante',
      description: ''
    }
  ];

  const domainWorkflow = [
    {
      name: 'Registro de Usuario',
      description: 'Busca correo existente → Encripta contraseña → Normaliza datos → Guarda usuario → Asigna rol basado en universityId → Genera tokens.'
    },
    {
      name: 'Autenticación',
      description: 'Verifica credenciales → Obtiene datos de rol → Genera tokens JWT → Establece sesión.'
    },
    {
      name: 'Renovación de Sesión',
      description: 'Valida refreshToken → Verifica rol activo → Genera nuevo accessToken → Mantiene sesión.'
    }
  ];

  const domainEntities = [
    {
      name: 'User (Base Entity)',
      fields: [
        "uuid_user",
        "email",
        "password",
        "firstName",
        "middleName",
        "lastName",
        "status",
        "lastLoginIp",
        "lastLoginAt",
      ]
    },
    {
      name: 'Student (Role Entity)',
      fields: [
        "uuid_student",
        "uuidUser",
        "universityId",
        "averageGrade",
        "enrollmentYear",
        "status",
      ]
    },
    {
      name: 'Professor (Role Entity)',
      fields: [
        "uuid_professor",
        "uuidUser",
        "universityId",
        "role"
      ]
    },
    {
      name: 'Outsider (Role Entity)',
      fields: [
        "uuid_outsider",
        "uuidUser",
        "organizationName",
        "phoneNumber",
      ]
    },
  ];

  const userRegistrationCode = `<span class="comment">// domain/user/registerUser.js - Lógica central de registro</span>
<span class="keyword">export async function</span> <span class="function">registerUser</span>({ <span class="parameter">body</span>, <span class="parameter">ip</span>, <span class="parameter">userAgent</span> }) {
  <span class="comment">// 1. Buscar si el correo ya fue usado</span>
  <span class="keyword">const</span> <span class="variable">existing</span> = <span class="keyword">await</span> <span class="variable">userRepo</span>.<span class="method">findByEmail</span>(<span class="parameter">body</span>.<span class="property">email</span>);
  <span class="keyword">if</span> (<span class="variable">existing</span>) <span class="keyword">throw</span> <span class="keyword">new</span> <span class="class">Error</span>(<span class="string">"El correo ya ha sido usado."</span>);

  <span class="comment">// 2. Encriptar la contraseña</span>
  <span class="keyword">const</span> <span class="variable">hashed</span> = <span class="keyword">await</span> <span class="function">hashPassword</span>(<span class="parameter">body</span>.<span class="property">password</span>);

  <span class="comment">// 3. Normalizar los datos</span>
  <span class="keyword">const</span> <span class="variable">user</span> = <span class="keyword">new</span> <span class="class">User</span>({
    ...<span class="parameter">body</span>,
    <span class="property">email</span>: <span class="variable">userData</span>.<span class="property">email</span>,
    <span class="property">password</span>: <span class="variable">hashed</span>,
    <span class="property">lastLoginIp</span>: <span class="parameter">ip</span>,
    <span class="property">lastLoginAt</span>: <span class="keyword">new</span> <span class="class">Date</span>()
  });

  <span class="comment">// 4. Guardar los datos normalizados del usuario en la base de datos</span>
  <span class="keyword">const</span> <span class="variable">saved</span> = <span class="keyword">await</span> <span class="variable">userRepo</span>.<span class="method">save</span>(<span class="variable">user</span>.<span class="method">toPrimitives</span>());

  <span class="comment">// 5. Asignar rol basado en universityId</span>
  <span class="keyword">let</span> <span class="variable">uuidRole</span>;

  <span class="keyword">if</span> (!<span class="parameter">body</span>.<span class="property">universityId</span>) {
    <span class="keyword">const</span> <span class="variable">outsiderSaved</span> = <span class="keyword">await</span> <span class="function">createOutsider</span>(<span class="variable">saved</span>.<span class="property">uuid_user</span>);
    <span class="variable">uuidRole</span> = <span class="template-literal">\`outsider:\${<span class="variable">outsiderSaved</span>.<span class="property">uuid_outsider</span>}\`</span>;
  } <span class="keyword">else if</span> (<span class="parameter">body</span>.<span class="property">universityId</span>.<span class="property">length</span> === <span class="number">8</span>) {
    <span class="keyword">const</span> <span class="variable">studentSaved</span> = <span class="keyword">await</span> <span class="function">createStudent</span>(
      <span class="variable">saved</span>.<span class="property">uuid_user</span>,
      <span class="parameter">body</span>.<span class="property">universityId</span>
    );
    <span class="variable">uuidRole</span> = <span class="template-literal">\`student:\${<span class="variable">studentSaved</span>.<span class="property">uuid_student</span>}\`</span>;
  } <span class="keyword">else if</span> (<span class="parameter">body</span>.<span class="property">universityId</span>.<span class="property">length</span> === <span class="number">4</span>) {
    <span class="keyword">const</span> <span class="variable">professorSaved</span> = <span class="keyword">await</span> <span class="function">createProfessor</span>(
      <span class="variable">saved</span>.<span class="property">uuid_user</span>,
      <span class="parameter">body</span>.<span class="property">universityId</span>
    );
    <span class="variable">uuidRole</span> = <span class="template-literal">\`professor:\${<span class="variable">professorSaved</span>.<span class="property">uuid_professor</span>}\`</span>;
  } <span class="keyword">else</span> {
    <span class="keyword">throw</span> <span class="keyword">new</span> <span class="class">Error</span>(
      <span class="string">"Unable to assign a role. Please ensure the provided information is correct and complete."</span>
    );
  }

  <span class="comment">// 6. Generar tokens</span>
  <span class="keyword">const</span> <span class="variable">payload</span> = {
    <span class="property">uuid_user</span>: <span class="variable">saved</span>.<span class="property">uuid_user</span>,
    <span class="property">role</span>: <span class="variable">uuidRole</span>,
    <span class="parameter">ip</span>,
    <span class="property">ua</span>: <span class="parameter">userAgent</span>,
  };

  <span class="keyword">const</span> <span class="variable">accessToken</span> = <span class="function">generateAccessToken</span>(<span class="variable">payload</span>);
  <span class="keyword">const</span> <span class="variable">refreshToken</span> = <span class="function">generateRefreshToken</span>(<span class="variable">payload</span>);

  <span class="keyword">return</span> { <span class="property">user</span>: <span class="variable">saved</span>, <span class="variable">accessToken</span>, <span class="variable">refreshToken</span> };
}`;
  
  const loginFlowCode = `<span class="comment">// domain/libs/auth/jwt.js - Generacion de tokens</span>
<span class="keyword">export function</span> <span class="function">generateAccessToken</span>(<span class="parameter">payload</span>) {
  <span class="keyword">return</span> <span class="variable">jwt</span>.<span class="method">sign</span>(<span class="parameter">payload</span>, <span class="variable">JWT_SECRET</span>, {
    <span class="property">algorithm</span>: <span class="string">"HS256"</span>,
    <span class="property">expiresIn</span>: <span class="variable">ACCESS_TOKEN_EXPIRES</span>,
  });
}

<span class="keyword">export function</span> <span class="function">generateRefreshToken</span>(<span class="parameter">payload</span>) {
  <span class="keyword">return</span> <span class="variable">jwt</span>.<span class="method">sign</span>(<span class="parameter">payload</span>, <span class="variable">JWT_REFRESH_SECRET</span>, {
    <span class="property">algorithm</span>: <span class="string">"HS256"</span>,
    <span class="property">expiresIn</span>: <span class="variable">REFRESH_TOKEN_EXPIRES</span>,
  });
}`;
  

  return (
    <>
      <Hero 
        title="Capa de Dominio"
        description="El núcleo de la lógica de negocio - gestionando reglas académicas, validaciones avanzadas y flujos de trabajo específicos del dominio universitario."
      />
      
      <ArchitectureFlow activeLayer="domain" setActiveLayer={setActiveLayer}/>
      
      <ContentSection icon="🧠" title="Lógica de Negocio Central">
        <p>La capa de Dominio encapsula toda la <strong>lógica de negocio crítica</strong> y las <strong>reglas académicas</strong> del sistema universitario. Es responsable de:</p>
        <TechStack technologies={technologies} />
        <p>El sistema asigna roles a los usuarios en función de su <strong>universityId</strong>:</p>
        <TechStack technologies={roleAssignment} />
        <CodeBlock code={userRegistrationCode} />
      </ContentSection>

      <ContentSection icon="👥" title="Sistema de Roles y Entidades">
        <p>El sistema gestiona diferentes tipos de usuarios con roles específicos y reglas de negocio particulares. Cada entidad tiene campos definidos para garantizar la normalización de datos y la robustez de la seguridad, evitando acciones no permitidas:</p>
        <DatabaseTables tables={domainEntities} />
      </ContentSection>

      <ContentSection icon="🔐" title="Autenticación y Gestión de Sesiones">
        <p>El sistema implementa un mecanismo robusto de autenticación basado en <strong>JWT tokens</strong> con doble capa de seguridad:</p>
        <ul>
          <li><strong>Access Token:</strong> Válido por 15 minutos, utilizado para autenticar solicitudes.</li>
          <li><strong>Refresh Token:</strong> Válido por 7 días, almacenado como cookie HTTP-only, usado para generar nuevos Access Tokens.</li>
          <li><strong>Payload del Token:</strong> Incluye información del usuario y del rol en formato <code>ROLENAME:UUID_ROLE</code>.</li>
        </ul>
        <CodeBlock code={loginFlowCode} />
      </ContentSection>

      <ContentSection icon="🔄" title="Flujo de Trabajo del Dominio">
        <p>La capa de Dominio coordina los siguientes flujos de trabajo principales:</p>
        <TechStack technologies={domainWorkflow} block={true}/>
      </ContentSection>
    </>
  );
};

export default DomainPage;
