// src/components/AccessibilityPreferences.jsx
import { useState } from 'react';
import PreferenceToggle from "./PreferenceToggle";

const AccessibilityPreferences = () => {
  const [preferences, setPreferences] = useState({
    autoSave: true,
    highContrast: false,
    reducedMotion: false,
    screenReader: false
  });

  const handlePreferenceChange = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="accessibility-preferences">
      <h2 className="section-title">
        <span className="section-icon">⚙️</span>
        Preferencias de Accesibilidad
      </h2>
      
      <div className="preferences-grid">
        <PreferenceToggle
          id="autoSave"
          label="Guardar configuración automáticamente"
          description="Las configuraciones se guardarán automáticamente al cambiar"
          checked={preferences.autoSave}
          onChange={() => handlePreferenceChange('autoSave')}
        />
        <PreferenceToggle
          id="highContrast"
          label="Preferir alto contraste"
          description="Usar colores de alto contraste por defecto"
          checked={preferences.highContrast}
          onChange={() => handlePreferenceChange('highContrast')}
        />
      </div>
    </section>
  );
};

export default AccessibilityPreferences;
