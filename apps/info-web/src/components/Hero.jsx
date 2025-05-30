// src/components/Hero.jsx
const Hero = ({ title, description }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Hero;
