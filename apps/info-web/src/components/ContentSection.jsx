// src/components/ContentSection.jsx
const ContentSection = ({ children, title }) => {
  return (
    <section className="content-section">
      <h2>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default ContentSection;
