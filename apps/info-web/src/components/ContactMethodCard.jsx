// src/components/ContactMethodCard.jsx
const ContactMethodCard = ({ icon, title, value, description }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copiado al portapapeles`);
  };

  return (
    <div className="contact-method-card">
      <div className="method-header">
        <span className="method-icon">{icon}</span>
        <h3 className="method-title">{title}</h3>
      </div>
      <div className="method-content">
        <div className="method-value" onClick={() => handleCopy(value)}>
          {value}
          <span className="copy-hint">📋</span>
        </div>
        <p className="method-description">{description}</p>
      </div>
    </div>
  );
};

export default ContactMethodCard;
