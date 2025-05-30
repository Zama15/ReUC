// src/components/TechStack.jsx
const TechStack = ({ technologies, block }) => {
  return (
    <div className="tech-stack" style={block ? { display: 'block', gap: "1rem"} : undefined}>
      {technologies.map((tech, index) => (
        <div key={index} className="tech-item" style={block ? { margin: '1rem' } : undefined}>
          <h4>{tech.name}</h4>
          <p>{tech.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
