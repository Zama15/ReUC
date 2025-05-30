// src/components/VisionModeButton.jsx
const VisionModeButton = ({ mode, label, description, isSelected, onClick }) => {
  return (
    <button 
      className={`vision-mode-btn ${isSelected ? 'selected' : ''}`}
      data-mode={mode}
      onClick={onClick}
      title={description}
    >
      <span className="mode-label">{label}</span>
      <span className="mode-description">{description}</span>
    </button>
  );
};

export default VisionModeButton;
