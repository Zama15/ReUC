// src/components/AccessibilityFeatures.jsx
import FeatureCard from "./FeatureCard";

const AccessibilityFeatures = () => {
  const features = [
    {
      icon: "🎨",
      title: "Personalización Visual",
      description: "Cambia colores, contrastes y modos de visualización según tus preferencias.",
      items: ["Modo oscuro/claro", "Alto contraste", "Filtros de daltonismo"]
    },
    {
      icon: "📏",
      title: "Control de Texto",
      description: "Ajusta el tamaño y tipo de fuente para mejorar la legibilidad.",
      items: ["Aumentar/reducir texto", "Cambio de fuentes", "Espaciado mejorado"]
    },
    {
      icon: "🎯",
      title: "Navegación Mejorada",
      description: "Herramientas para facilitar la navegación y interacción.",
      items: ["Cursor personalizado", "Resaltado de enlaces", "Controles simplificados"]
    },
    {
      icon: "⚙️",
      title: "Configuración Flexible",
      description: "Guarda tus preferencias y resetea cuando lo necesites.",
      items: ["Configuración persistente", "Reset rápido", "Perfiles personalizados"]
    }
  ];

  return (
    <section className="accessibility-features">
      <h2 className="section-title">
        <span className="section-icon">✨</span>
        Características de Accesibilidad
      </h2>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default AccessibilityFeatures;
