// src/components/Navigation.jsx
const Navigation = ({ currentLayer, setCurrentLayer, isMenuOpen }) => {
  const navItems = [
    { id: 'presentation', label: 'Presentación' },
    { id: 'application', label: 'Aplicación' },
    { id: 'domain', label: 'Dominio' },
    { id: 'infrastructure', label: 'Infraestructura' },
    { id: 'accessibility', label: 'Accesibilidad' },
    { id: 'contact', label: 'Contactar' },
  ];

  return (
    <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      {navItems.map(item => (
        <li key={item.id}>
          <a
            href="#"
            className={currentLayer === item.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCurrentLayer(item.id);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
