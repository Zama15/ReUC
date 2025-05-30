// src/components/FeatureCard.jsx
const FeatureCard = ({ icon, title, description, items }) => {
  return (
    <div className="feature-card">
      <div className="feature-header">
        <span className="feature-icon">{icon}</span>
        <h3 className="feature-title">{title}</h3>
      </div>
      <p className="feature-description">{description}</p>
      <ul className="feature-items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
