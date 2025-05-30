const PreferenceToggle = ({ id, label, description, checked, onChange }) => {
  return (
    <div className="preference-item" onClick={() => document.getElementById(id).click()}>
      <div className="preference-header">
        <label
          htmlFor={id}
          className="preference-label"
          onClick={(e) => e.stopPropagation()}>
            {label}
        </label>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="toggle-input"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="toggle-slider"></span>
        </div>
      </div>
      <p className="preference-description">{description}</p>
    </div>
  );
};

export default PreferenceToggle;
