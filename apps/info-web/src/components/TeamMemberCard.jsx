// src/components/TeamMemberCard.jsx
import { Fragment } from "react";

const TeamMemberCard = ({ name, role, email, speciality, avatar, badges }) => {
  const handleEmailClick = (email) => {
    navigator.clipboard.writeText(email);
    alert('¡Correo copiado al portapapeles!');
  };

  return (
    <div className="team-member-card">
      <div className="member-avatar">{avatar}</div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-speciality">{speciality}</p>
        <div className="member-badges">
          {badges && (badges.map((badge, index) => (
            <Fragment key={index}>
              <img src={badge} alt={`Badge ${index + 1}`} className="badge-icon" />
            </Fragment>
          )))}
        </div>
        <button 
          className="member-email-btn"
          onClick={() => handleEmailClick(email)}
        >
          📧 Contactar
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
