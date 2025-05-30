// src/components/DemoCard.jsx
const DemoCard = ({ title, text, hasImage, hasLinks, visionMode }) => {
  return (
    <div className={`demo-card vision-${visionMode}`}>
      <h3>{title}</h3>
      {hasImage && (
        <div className="demo-image">
          <div className="placeholder-image">
            <img src="https://portal.ucol.mx/content/micrositios/210/image/Facultad.jpeg" alt="Edificio hexagonal de FIE" />
          </div>
        </div>
      )}
      <p>{text}</p>
      {hasLinks && (
        <div className="demo-links">
          <a href="#" className="demo-link" onClick={(e) => e.preventDefault()}>Enlace de ejemplo</a>
          <a href="#" className="demo-link secondary" onClick={(e) => e.preventDefault()}>Enlace secundario</a>
        </div>
      )}
    </div>
  );
};

export default DemoCard;
