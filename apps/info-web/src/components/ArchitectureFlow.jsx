// src/components/ArchitectureFlow.jsx
import { Fragment } from "react";

const ArchitectureFlow = ({ activeLayer, setActiveLayer }) => {
  const layers = [
    { id: 'presentation', name: 'Presentación', desc: 'API de Express' },
    { id: 'application', name: 'Aplicación', desc: 'Lógica de Negocio' },
    { id: 'domain', name: 'Dominio', desc: 'Reglas Centrales' },
    { id: 'infrastructure', name: 'Infraestructura', desc: 'Datos y Externos' }
  ];

  return (
    <section className="architecture-flow">
      <h2>Resumen de Arquitectura</h2>
      <div className="flow-diagram">
        {layers.map((layer, index) => (
          <Fragment key={layer.id}>
            <a
              href="#"
              className={`layer-box ${activeLayer === layer.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLayer(layer.id);
              }}
            >
              <h3>{layer.name}</h3>
              <p>{layer.desc}</p>
            </a>
            {index < layers.length - 1 && <div className="arrow">⇄</div>}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default ArchitectureFlow;
