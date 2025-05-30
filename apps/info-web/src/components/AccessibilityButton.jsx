// src/components/AccessibilityButton.jsx
const AccessibilityButton = ({ id, label, icon, onClick, isActive }) => {
  return (
    <button 
      id={id}
      className={`accessibility-btn ${isActive ? 'active' : ''}`}
      onClick={onClick}
      title={label}
      aria-pressed={isActive}
    >
      <span className="btn-icon">{icon}</span>
      <span className="btn-label">{label}</span>
    </button>
  );
};

export default AccessibilityButton;
