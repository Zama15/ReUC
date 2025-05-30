// src/components/AccessibilityControls.jsx
import { useState } from 'react';
import AccessibilityButton from "./AccessibilityButton";
import VisionModeButton from "./VisionModeButton";
import useAccessibility from "../hooks/useAccessibility";

const AccessibilityControls = () => {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isVisionMenuOpen, setIsVisionMenuOpen] = useState(false);

  const { accessibilityState, controls, setVisionMode } = useAccessibility();

  const accessibilityButtons = [
    { 
      id: 'toggle-light', 
      label: 'Modo claro', 
      icon: '☀️',
      isActive: accessibilityState.lightMode
    },
    { 
      id: 'text-toggle', 
      label: `Aumentar texto (${accessibilityState.fontSize}%)`, 
      icon: '🔍+',
      isActive: accessibilityState.fontSize > 100
    },
    { 
      id: 'reduce-text', 
      label: `Reducir texto (${accessibilityState.fontSize}%)`, 
      icon: '🔍-',
      isActive: accessibilityState.fontSize < 100
    },
    { 
      id: 'toggle-font', 
      label: `Fuente: ${accessibilityState.fontFamily}`, 
      icon: '📝',
      isActive: accessibilityState.fontFamily !== 'inter'
    },
    { 
      id: 'reset-accessibility', 
      label: 'Resetear accesibilidad', 
      icon: '🔄',
      isActive: false
    }
  ];

  const visionModes = [
    { mode: 'normal', label: 'Visión normal', description: 'Vista estándar sin filtros' },
    { mode: 'protanopia', label: 'Protanopia', description: 'Dificultad para ver el rojo' },
    { mode: 'deuteranopia', label: 'Deuteranopia', description: 'Dificultad para ver el verde' },
    { mode: 'tritanopia', label: 'Tritanopia', description: 'Dificultad para ver el azul' }
  ];

  return (
    <section className="accessibility-controls-section">
      <h2 className="section-title">
        Controles de Accesibilidad
      </h2>
      
      <div className="controls-container">
        <button 
          className="accessibility-trigger"
          onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
          aria-expanded={isAccessibilityOpen}
        >
          <span className="trigger-icon">♿</span>
          <span>Abrir Panel de Accesibilidad</span>
          <span className={`arrow ${isAccessibilityOpen ? 'open' : ''}`}>▼</span>
        </button>

        <aside 
          className={`accessibility-sidebar ${isAccessibilityOpen ? 'open' : ''}`}
          aria-hidden={!isAccessibilityOpen}
        >
          <div className="sidebar-header">
            <h3>Panel de Accesibilidad</h3>
            <button 
              className="close-accessibility"
              onClick={() => setIsAccessibilityOpen(false)}
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </div>

          <div className="accessibility-bar">
            <div className="controls-grid">
              {accessibilityButtons.map(button => (
                <AccessibilityButton 
                  key={button.id}
                  id={button.id}
                  label={button.label}
                  icon={button.icon}
                  onClick={controls[button.id]}
                  isActive={button.isActive}
                />
              ))}
            </div>

            <div className="vision-section">
              <button 
                className="vision-toggle"
                onClick={() => setIsVisionMenuOpen(!isVisionMenuOpen)}
                aria-expanded={isVisionMenuOpen}
              >
                <span className="vision-icon">👁️</span>
                Daltonismo ({accessibilityState.visionMode})
                <span className={`arrow ${isVisionMenuOpen ? 'open' : ''}`}>▼</span>
              </button>
              
              <div className={`vision-modes ${isVisionMenuOpen ? 'open' : ''}`}>
                {visionModes.map(mode => (
                  <VisionModeButton
                    key={mode.mode}
                    mode={mode.mode}
                    label={mode.label}
                    description={mode.description}
                    isSelected={accessibilityState.visionMode === mode.mode}
                    onClick={() => setVisionMode(mode.mode)}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AccessibilityControls;
