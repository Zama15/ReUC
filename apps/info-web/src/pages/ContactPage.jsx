// src/pages/ContactPage.jsx
import { useState } from 'react';
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import TeamSection from "../components/TeamSection";

const ContactPage = () => {
  const [captcha, setCaptcha] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captcha) {
      alert('Por favor, completa el captcha antes de enviar el formulario.');
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/ajeronimo@ucol.mx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        alert('¡Mensaje enviado! Te contactaremos pronto.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Hubo un problema al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocurrió un error. Por favor, intenta más tarde.');
    }
  };

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactForm 
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        captcha={captcha}
        setCaptcha={setCaptcha}
      />
      <TeamSection />
    </div>
  );
};

export default ContactPage;
