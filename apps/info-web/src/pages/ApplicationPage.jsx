// src/pages/ApplicationPage.jsx
import Hero from '../components/Hero';
import ArchitectureFlow from '../components/ArchitectureFlow';
import ContentSection from '../components/ContentSection';
import TechStack from '../components/TechStack';
import CodeBlock from '../components/CodeBlock';

const ApplicationPage = ({setActiveLayer}) => {
  const technologies = [
    {
      name: 'Validación de Entrada',
      description: 'Valida y sanitiza todos los datos entrantes antes de ser procesados por el dominio'
    },
    {
      name: 'Coordinación de Casos de Uso',
      description: 'Orquesta las operaciones entre las capas de presentación y dominio'
    },
    {
      name: 'Manejo de Errores',
      description: 'Proporciona manejo consistente de errores y respuestas estandarizadas'
    },
    {
      name: 'Transformación de Datos',
      description: 'Adapta los datos entre formatos de entrada/salida y el modelo de dominio'
    }
  ];

  const applicationWorkflow = [
    {
      step: 'Recibir datos',
      description: '1. Recibir datos de la capa de Presentación'
    },
    {
      step: 'Validar y sanitizar',
      description: '2. Validar y sanitizar los datos de entrada'
    },
    {
      step: 'Transformar datos',
      description: '3. Transformar datos al formato esperado por el Dominio'
    },
    {
      step: 'Delegar operaciones',
      description: '4. Delegar operaciones a la capa de Dominio'
    },
    {
      step: 'Procesar respuesta',
      description: '5. Procesar respuesta del Dominio'
    },
    {
      step: 'Transformar y devolver',
      description: '6. Transformar y devolver resultado a Presentación'
    }
  ];

  const registerUserCode = `<span class="comment">// Ejemplo de Capa de Aplicación - Login de Usuario</span>
<span class="keyword">export async function</span> <span class="function">login</span>({ <span class="parameter">data</span>, <span class="parameter">ip</span>, <span class="parameter">userAgent</span> }) {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">emailError</span> = <span class="function">validateEmail</span>(<span class="parameter">data</span>.<span class="property">email</span>);
    <span class="keyword">if</span> (<span class="variable">emailError</span>) <span class="keyword">throw</span> <span class="keyword">new</span> <span class="class">ValidationError</span>(<span class="string">'Correo o contraseña no valido'</span>);

    <span class="keyword">const</span> <span class="variable">resObj</span> = <span class="keyword">await</span> <span class="function">loginUser</span>({
      <span class="property">email</span>: <span class="parameter">data</span>.<span class="property">email</span>,
      <span class="property">password</span>: <span class="parameter">data</span>.<span class="property">password</span>,
      <span class="parameter">ip</span>,
      <span class="parameter">userAgent</span>,
    });
    <span class="keyword">if</span> (!<span class="variable">resObj</span>.<span class="property">updated</span>)
      <span class="keyword">throw</span> <span class="keyword">new</span> <span class="class">Warning</span>(<span class="string">'No se ha podido actualizar ultimo login del usuario'</span>);

    <span class="keyword">const</span> { <span class="property">password</span>, ...<span class="variable">safeUser</span> } = <span class="variable">resObj</span>.<span class="property">user</span>;
    <span class="keyword">const</span> <span class="variable">accessToken</span> = <span class="variable">resObj</span>.<span class="property">accessToken</span>;
    <span class="keyword">const</span> <span class="variable">refreshToken</span> = <span class="variable">resObj</span>.<span class="property">refreshToken</span>;

    <span class="keyword">return</span> { <span class="property">user</span>: <span class="variable">safeUser</span>, <span class="property">tokens</span>: { <span class="variable">accessToken</span>, <span class="variable">refreshToken</span> } };
  } <span class="keyword">catch</span> (<span class="parameter">error</span>) {
    <span class="keyword">throw</span> <span class="parameter">error</span>;
  }
}`;
  
  const validationUtilsCode = `<span class="comment">// Utilidades de Validación de la Capa de Aplicación</span>
<span class="keyword">export function</span> <span class="function">validateEmail</span>(<span class="parameter">email</span>) {
  <span class="keyword">const</span> <span class="variable">emailRegex</span> = <span class="regex">/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/</span>;
  <span class="keyword">if</span> (!<span class="parameter">email</span>) <span class="keyword">return</span> <span class="string">'Email necesario para registro.'</span>;
  <span class="keyword">if</span> (!<span class="variable">emailRegex</span>.<span class="method">test</span>(<span class="parameter">email</span>)) <span class="keyword">return</span> <span class="string">'Email no válido.'</span>;
  <span class="keyword">return</span> <span class="literal">null</span>;
}

<span class="keyword">export function</span> <span class="function">validatePassword</span>(<span class="parameter">password</span>) {
  <span class="keyword">if</span> (!<span class="parameter">password</span>) <span class="keyword">return</span> <span class="string">'Contraseña obligatoria.'</span>;
  <span class="keyword">if</span> (<span class="parameter">password</span>.<span class="property">length</span> < <span class="number">8</span>) <span class="keyword">return</span> <span class="string">'Mínimo 8 caracteres.'</span>;
  <span class="keyword">if</span> (!<span class="regex">/[A-Z]/</span>.<span class="method">test</span>(<span class="parameter">password</span>)) <span class="keyword">return</span> <span class="string">'Debe incluir al menos una mayúscula.'</span>;
  <span class="keyword">if</span> (!<span class="regex">/[a-z]/</span>.<span class="method">test</span>(<span class="parameter">password</span>)) <span class="keyword">return</span> <span class="string">'Debe incluir al menos una minúscula.'</span>;
  <span class="keyword">if</span> (!<span class="regex">/[0-9!@#$%^&*]/</span>.<span class="method">test</span>(<span class="parameter">password</span>))
    <span class="keyword">return</span> <span class="string">'Debe incluir un número o símbolo.'</span>;

  <span class="keyword">return</span> <span class="literal">null</span>;
}

<span class="keyword">export function</span> <span class="function">sanitizeInput</span>(<span class="parameter">input</span>) {
  <span class="keyword">if</span> (<span class="keyword">typeof</span> <span class="parameter">input</span> !== <span class="string">'string'</span>) <span class="keyword">return</span> <span class="parameter">input</span>;
  
  <span class="keyword">return</span> <span class="parameter">input</span>.<span class="method">trim</span>()
    .<span class="method">replace</span>(<span class="regex">/<script[^>]*>.*?<\\/script>/gi</span>, <span class="string">''</span>)
    .<span class="method">replace</span>(<span class="regex">/<[^>]+>/g</span>, <span class="string">''</span>);
}`;

  return (
    <>
      <Hero 
        title="Capa de Aplicación"
        description="El coordinador inteligente - validando entradas, orquestando casos de uso y conectando la presentación con el dominio"
      />
      
      <ArchitectureFlow activeLayer="application" setActiveLayer={setActiveLayer} />
      
      <ContentSection icon="🎯" title="Responsabilidades Principales">
        <p>La capa de Aplicación actúa como <strong>intermediario coordinador</strong> entre la capa de Presentación y la capa de Dominio. Es responsable de:</p>
        <TechStack technologies={technologies} />
        <p>Esta capa <strong>NO contiene lógica de negocio</strong> - esa responsabilidad pertenece exclusivamente a la capa de Dominio. En su lugar, se enfoca en la coordinación y validación de datos de entrada.</p>
      </ContentSection>

      <ContentSection icon="🔍" title="Validación y Coordinación">
        <p>La capa de Aplicación proporciona la primera línea de validación para todos los datos entrantes:</p>
        <CodeBlock code={registerUserCode} />
        <p>Cada función de aplicación valida los datos de entrada y luego delega la lógica de negocio a la capa de Dominio correspondiente.</p>
      </ContentSection>

      <ContentSection icon="🛠️" title="Utilidades de Validación">
        <p>La capa incluye utilidades especializadas para la validación y sanitización de datos:</p>
        <CodeBlock code={validationUtilsCode} />
        <p>Estas utilidades garantizan que solo datos válidos y seguros lleguen a la capa de Dominio.</p>
      </ContentSection>

      <ContentSection icon="📋" title="Flujo de Trabajo">
        <p>El flujo típico en la capa de Aplicación sigue este patrón:</p>
        <TechStack technologies={applicationWorkflow}/>
      </ContentSection>
    </>
  );
};

export default ApplicationPage;
