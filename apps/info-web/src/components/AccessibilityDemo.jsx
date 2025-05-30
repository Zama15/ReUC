// src/components/AccessibilityDemo.jsx
import DemoCard from "./DemoCard";

const AccessibilityDemo = ({ selectedVisionMode }) => {
  const getVisionModeLabel = (mode) => {
    const labels = {
      normal: 'Visión Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia'
    };
    return labels[mode] || 'Desconocido';
  };
  
  const demoContent = [
    {
      title: "Ejemplo de Contenido",
      text: "Este es un ejemplo de cómo se ve el contenido con diferentes configuraciones de accesibilidad aplicadas.",
      hasImage: true,
      hasLinks: true
    },
    {
      title: "Texto de Muestra",
      text: "Aquí puedes ver cómo los cambios de fuente, tamaño y contraste afectan la legibilidad del texto.",
      hasImage: false,
      hasLinks: true
    }
  ];

  return (
    <section className="accessibility-demo">
      <h2 className="section-title">
        <span className="section-icon">👀</span>
        Vista Previa de Cambios
      </h2>
      
      <div className="demo-info">
        <span className="current-mode">
          Modo actual: <strong>{getVisionModeLabel(selectedVisionMode)}</strong>
        </span>
      </div>

      <div className="demo-grid">
        {demoContent.map((item, index) => (
          <DemoCard key={index} {...item} visionMode={selectedVisionMode} />
        ))}
      </div>
    </section>
  );
};

export default AccessibilityDemo;
