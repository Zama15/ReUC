import Hero from '../components/Hero';
import ArchitectureFlow from '../components/ArchitectureFlow';
import ContentSection from '../components/ContentSection';
import TechStack from '../components/TechStack';
import CodeBlock from '../components/CodeBlock';

const PresentationPage = ({setActiveLayer}) => {
  const technologies = [
    {
      name: 'Express.js Server',
      description: 'Servidor HTTP robusto que maneja todas las peticiones REST y proporciona endpoints para la API'
    },
    {
      name: 'Middleware de Autenticación',
      description: 'Sistema JWT para proteger rutas y verificar tokens de acceso con roles específicos'
    },
    {
      name: 'Manejo de CORS',
      description: 'Configuración de políticas de origen cruzado para comunicación segura con el frontend'
    },
    {
      name: 'Validación de CSRF en Rutas POST',
      description: 'Si la ruta es POST, verifica el token CSRF antes de delegar operaciones para prevenir ataques de falsificación de solicitudes'
    },
    {
      name: 'Gestión de Tokens de Acceso',
      description: 'Manejo de tokens de acceso (15 min) enviados al frontend para ser almacenados en localStorage o similar. Estos tokens se utilizan para autenticar cada petición al servidor.'
    },
    {
      name: 'Gestión de Refresh Tokens',
      description: 'Manejo de refresh tokens (7 días) almacenados en cookies HTTP-only para mayor seguridad. Estos tokens se utilizan para renovar los tokens de acceso cuando expiran.'
    },
  ];

  const presentationWorkflow = [
    {
      step: 'Recibir petición HTTP',
      description: '1. El servidor Express recibe peticiones GET/POST/PUT/DELETE'
    },
    {
      step: 'Middleware de autenticación',
      description: '2. Verificar tokens JWT y roles de usuario según la ruta'
    },
    {
      step: 'Llamar capa aplicación',
      description: '3. Delegar lógica de negocio a @reuc/application'
    },
    {
      step: 'Procesar respuesta',
      description: '4. Recibir resultado de la capa de aplicación'
    },
    {
      step: 'Formatear respuesta HTTP',
      description: '5. Devolver respuesta con códigos de estado apropiados (200, 201, 400, 401, 403)'
    }
  ];


  const authRouteCode = `<span class="comment">// Rutas de Autenticación</span>
<span class="keyword">import</span> <span class="variable">express</span> <span class="keyword">from</span> <span class="string">'express'</span>;
<span class="keyword">import</span> <span class="variable">csrf</span> <span class="keyword">from</span> <span class="string">'csurf'</span>;
<span class="keyword">import</span> <span class="variable">session</span> <span class="keyword">from</span> <span class="string">'@reuc/application/auth/index.js'</span>;

<span class="keyword">const</span> <span class="variable">router</span> = <span class="variable">express</span>.<span class="method">Router</span>();
<span class="keyword">const</span> <span class="variable">csrfProtection</span> = <span class="function">csrf</span>({ <span class="property">cookie</span>: <span class="boolean">true</span> });
<span class="keyword">const</span> <span class="variable">REFRESH_EXPIRES</span> = <span class="variable">process</span>.<span class="property">env</span>.<span class="property">REFRESH_TOKEN_EXPIRES_INT</span>;

<span class="variable">router</span>.<span class="method">post</span>(<span class="string">'/register'</span>, <span class="variable">csrfProtection</span>, <span class="keyword">async</span> (<span class="parameter">req</span>, <span class="parameter">res</span>) => {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> { <span class="property">tokens</span>, <span class="property">user</span> } = <span class="keyword">await</span> <span class="variable">session</span>.<span class="method">register</span>({
      <span class="property">body</span>: <span class="parameter">req</span>.<span class="property">body</span>, 
      <span class="property">ip</span>: <span class="parameter">req</span>.<span class="property">ip</span>, 
      <span class="property">userAgent</span>: <span class="parameter">req</span>.<span class="property">headers</span>[<span class="string">'user-agent'</span>]
    });

    <span class="parameter">res</span>.<span class="method">cookie</span>(<span class="string">'refreshToken'</span>, <span class="variable">tokens</span>.<span class="property">refreshToken</span>, {
      <span class="property">httpOnly</span>: <span class="boolean">true</span>, 
      <span class="property">secure</span>: <span class="boolean">true</span>, 
      <span class="property">sameSite</span>: <span class="string">'Strict'</span>, 
      <span class="property">maxAge</span>: <span class="variable">REFRESH_EXPIRES</span>
    }).<span class="method">status</span>(<span class="number">201</span>).<span class="method">json</span>({ 
      <span class="property">success</span>: <span class="boolean">true</span>, 
      <span class="property">data</span>: { <span class="property">user</span>, <span class="property">accessToken</span>: <span class="variable">tokens</span>.<span class="property">accessToken</span> } 
    });
  } <span class="keyword">catch</span> (<span class="parameter">err</span>) {
    <span class="parameter">res</span>.<span class="method">status</span>(<span class="parameter">err</span>.<span class="property">name</span> === <span class="string">'ValidationError'</span> ? <span class="number">422</span> : <span class="number">400</span>).<span class="method">json</span>({ 
      <span class="property">success</span>: <span class="boolean">false</span>, 
      <span class="property">err</span>: <span class="parameter">err</span>.<span class="property">message</span> 
    });
  }
});
  
<span class="keyword">export default</span> <span class="variable">router</span>;`;
  
  const middlewareCode = `<span class="comment">// Middleware de Autenticación</span>
<span class="keyword">import</span> <span class="variable">session</span> <span class="keyword">from</span> <span class="string">'@reuc/application/auth/index.js'</span>;
<span class="keyword">import</span> { <span class="class">ValidationError</span> } <span class="keyword">from</span> <span class="string">'@reuc/application/errors/ValidationError.js'</span>;

<span class="keyword">export const</span> <span class="variable">authMiddleware</span> = (<span class="parameter">req</span>, <span class="parameter">res</span>, <span class="parameter">next</span>) => {
  <span class="keyword">const</span> <span class="variable">token</span> = <span class="parameter">req</span>.<span class="property">headers</span>[<span class="string">'authorization'</span>]?.<span class="method">split</span>(<span class="string">' '</span>)[<span class="number">1</span>];
  <span class="keyword">if</span> (!<span class="variable">token</span>) {
    <span class="keyword">return</span> <span class="parameter">res</span>.<span class="method">status</span>(<span class="number">401</span>).<span class="method">json</span>({
      <span class="property">success</span>: <span class="boolean">false</span>,
      <span class="property">err</span>: <span class="string">'Falta el token de autorización'</span>
    });
  }

  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">decoded</span> = <span class="variable">session</span>.<span class="method">auth</span>(<span class="variable">token</span>, <span class="parameter">req</span>.<span class="property">ip</span>, <span class="parameter">req</span>.<span class="property">headers</span>[<span class="string">'user-agent'</span>]);
    <span class="parameter">req</span>.<span class="property">user</span> = <span class="variable">decoded</span>;
    <span class="function">next</span>();
  } <span class="keyword">catch</span> (<span class="parameter">err</span>) {
    <span class="keyword">if</span> (<span class="parameter">err</span> <span class="keyword">instanceof</span> <span class="class">ValidationError</span>) {
      <span class="keyword">return</span> <span class="parameter">res</span>.<span class="method">status</span>(<span class="number">403</span>).<span class="method">json</span>({
        <span class="property">success</span>: <span class="boolean">false</span>,
        <span class="property">err</span>: <span class="parameter">err</span>.<span class="property">message</span>
      });
    }
    <span class="keyword">return</span> <span class="parameter">res</span>.<span class="method">status</span>(<span class="number">401</span>).<span class="method">json</span>({
      <span class="property">success</span>: <span class="boolean">false</span>,
      <span class="property">err</span>: <span class="string">'Token inválido'</span>
    });
  }
};

<span class="comment">// Middleware para verificar roles específicos</span>
<span class="keyword">export const</span> <span class="variable">requireAdmin</span> = (<span class="parameter">req</span>, <span class="parameter">res</span>, <span class="parameter">next</span>) => {
  <span class="keyword">const</span> <span class="variable">roleData</span> = <span class="parameter">req</span>.<span class="property">user</span>?.<span class="property">role</span>;
  <span class="keyword">if</span> (<span class="variable">roleData</span>?.<span class="method">split</span>(<span class="string">':'</span>)[<span class="number">0</span>] !== <span class="string">'admin'</span>) {
    <span class="keyword">return</span> <span class="parameter">res</span>.<span class="method">status</span>(<span class="number">403</span>).<span class="method">json</span>({
      <span class="property">success</span>: <span class="boolean">false</span>,
      <span class="property">err</span>: <span class="string">'Sin acceso a estas funcionalidades'</span>
    });
  }
  <span class="function">next</span>();
};`;
  
  const serverSetupCode = `<span class="comment">// Configuración Principal del Servidor Express</span>
<span class="keyword">import</span> <span class="variable">express</span> <span class="keyword">from</span> <span class="string">'express'</span>;
<span class="keyword">import</span> <span class="variable">cors</span> <span class="keyword">from</span> <span class="string">'cors'</span>;
<span class="keyword">import</span> <span class="variable">cookieParser</span> <span class="keyword">from</span> <span class="string">'cookie-parser'</span>;
<span class="keyword">import</span> <span class="variable">csrf</span> <span class="keyword">from</span> <span class="string">'csurf'</span>;

<span class="keyword">import</span> { <span class="variable">authRouter</span> } <span class="keyword">from</span> <span class="string">'./routes/auth.js'</span>;
<span class="keyword">import</span> { <span class="variable">projectRouter</span> } <span class="keyword">from</span> <span class="string">'./routes/project.js'</span>;
<span class="keyword">import</span> { <span class="variable">adminRouter</span> } <span class="keyword">from</span> <span class="string">'./routes/admin.js'</span>;

<span class="keyword">const</span> <span class="variable">app</span> = <span class="function">express</span>();
<span class="keyword">const</span> <span class="variable">csrfProtection</span> = <span class="function">csrf</span>({ <span class="property">cookie</span>: <span class="boolean">true</span> });

<span class="comment">// Middlewares globales</span>
<span class="variable">app</span>.<span class="method">use</span>(<span class="function">cookieParser</span>());
<span class="variable">app</span>.<span class="method">use</span>(
  <span class="function">cors</span>({
    <span class="property">origin</span>: <span class="variable">process</span>.<span class="property">env</span>.<span class="property">ORIGIN</span> === <span class="string">'*'</span> ? <span class="boolean">true</span> : <span class="variable">process</span>.<span class="property">env</span>.<span class="property">ORIGIN</span>,
    <span class="property">credentials</span>: <span class="boolean">true</span>,
  })
);
<span class="variable">app</span>.<span class="method">use</span>(<span class="variable">express</span>.<span class="method">json</span>({ <span class="property">limit</span>: <span class="string">'10mb'</span> }));
<span class="variable">app</span>.<span class="method">use</span>(<span class="variable">express</span>.<span class="method">urlencoded</span>({ <span class="property">extended</span>: <span class="boolean">true</span> }));

<span class="comment">// Configurar timezone a UTC</span>
<span class="variable">process</span>.<span class="property">env</span>.<span class="property">TZ</span> = <span class="string">'UTC'</span>;

<span class="comment">// Rutas principales</span>
<span class="variable">app</span>.<span class="method">use</span>(<span class="string">'/auth'</span>, <span class="variable">authRouter</span>);
<span class="variable">app</span>.<span class="method">use</span>(<span class="string">'/project'</span>, <span class="variable">projectRouter</span>);
<span class="variable">app</span>.<span class="method">use</span>(<span class="string">'/admin'</span>, <span class="variable">adminRouter</span>);

<span class="comment">// Manejo de errores globales</span>
<span class="variable">app</span>.<span class="method">use</span>((<span class="parameter">err</span>, <span class="parameter">req</span>, <span class="parameter">res</span>, <span class="parameter">next</span>) => {
  <span class="variable">console</span>.<span class="method">error</span>(<span class="parameter">err</span>.<span class="property">stack</span>);
  <span class="parameter">res</span>.<span class="method">status</span>(<span class="number">500</span>).<span class="method">json</span>({
    <span class="property">success</span>: <span class="boolean">false</span>,
    <span class="property">err</span>: <span class="string">'Error interno del servidor'</span>
  });
});

<span class="keyword">const</span> <span class="variable">PORT</span> = <span class="variable">process</span>.<span class="property">env</span>.<span class="property">PORT</span> || <span class="number">3000</span>;
<span class="variable">app</span>.<span class="method">listen</span>(<span class="variable">PORT</span>, () => {
  <span class="variable">console</span>.<span class="method">log</span>(<span class="template-literal">\`API ejecutándose en http://localhost:\${<span class="variable">PORT</span>}\`</span>);
})`;

  return (
    <>
      <Hero 
        title="Capa de Presentación"
        description="El punto de entrada principal: gestionando peticiones HTTP, autenticación JWT, ofreciendo endpoints seguros para todas las operaciones, y proporcionando funcionalidades adicionales como protección CSRF, manejo de cookies, y registro de solicitudes entrantes."
      />
      
      <ArchitectureFlow activeLayer="presentation" setActiveLayer={setActiveLayer} />
      
      <ContentSection icon="🌐" title="Responsabilidades Clave">
        <p>La capa de Presentación funciona como <strong>puerta de enlace HTTP</strong> para toda la aplicación. Sus responsabilidades incluyen:</p>
        <TechStack technologies={technologies} />
        <p>Esta capa <strong>NO contiene lógica de negocio</strong>, sino que se enfoca en manejar la comunicación HTTP y delegar tareas a la capa de Aplicación.</p>
      </ContentSection>

      <ContentSection icon="🔐" title="Sistema de Autenticación JWT">
        <p>El sistema de autenticación implementa un enfoque de doble token con diferentes tiempos de vida:</p>
        <CodeBlock code={authRouteCode} />
        <p>Utiliza <strong>Access Tokens (15 minutos)</strong> para autenticar solicitudes y <strong>Refresh Tokens (7 días)</strong>, almacenados como cookies HTTP-only, para renovar los Access Tokens.</p>
        <p>La expiración de los tokens se configura en ambos extremos: el backend establece la expiración de los tokens en sí, mientras que el tiempo de vida de la cookie segura se configura por separado. El token de autenticación es devuelto al frontend, que es responsable de almacenarlo en el cliente, como en el localStorage o un mecanismo similar.</p>
      </ContentSection>

      <ContentSection icon="🛡️" title="Middleware de Seguridad">
        <p>Incluye middleware especializado para proteger rutas y verificar permisos:</p>
        <CodeBlock code={middlewareCode} />
        <p>Estos middlewares ofrecen <strong>verificación de tokens</strong>, <strong>control de roles</strong>, <strong>protección de rutas administrativas</strong>, y <strong>protección CSRF</strong> para solicitudes sensibles.</p>
      </ContentSection>

      <ContentSection icon="⚙️" title="Configuración del Servidor">
        <p>La configuración principal del servidor Express incluye todas las configuraciones esenciales:</p>
        <CodeBlock code={serverSetupCode} />
        <p>El servidor está configurado con <strong>CORS</strong>, <strong>manejo de cookies</strong>, <strong>zona horaria UTC</strong>, <strong>manejo global de errores</strong>, y <strong>registro de solicitudes entrantes</strong> para facilitar la depuración y el monitoreo.</p>
      </ContentSection>

      <ContentSection icon="📋" title="Flujo de Trabajo HTTP">
        <p>El flujo típico de una petición HTTP en la capa de Presentación es el siguiente:</p>
        <TechStack technologies={presentationWorkflow} block={true} />
        <p>Cada solicitud sigue un proceso estructurado que garantiza <strong>seguridad</strong>, <strong>validación</strong>, y <strong>respuestas consistentes</strong>.</p>
      </ContentSection>
    </>
  );
};

export default PresentationPage;
