// src/components/AccessibilityHero.jsx
const AccessibilityHero = () => {
  return (
    <section className="accessibility-hero">
      <div className="hero-content">
        <h1>Centro de Accesibilidad</h1>
        <p>
          Personaliza tu experiencia de navegación con nuestras herramientas de accesibilidad. 
          Adapta la interfaz según tus necesidades para una mejor experiencia de usuario.
        </p>
        <div className="accessibility-stats">
          <div className="stat-item">
            <span className="stat-number">9</span>
            <span className="stat-label">Herramientas disponibles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Modos de visión</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Compatible WCAG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityHero;
