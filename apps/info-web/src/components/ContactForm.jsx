// src/components/ContactForm.jsx
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ formData, handleInputChange, handleSubmit, captcha, setCaptcha }) => {
  return (
    <section className="contact-form-section">
      <h2 className="section-title">
        <span className="section-icon">✉️</span>
        Envíanos un Mensaje
      </h2>


      
      <div className="contact-form">
        <div className="form-row" style={{ gridTemplateColumns: "none" }}>
          <div className="form-group">
            <span className="form-label">
              Este formulario no utiliza cifrado y no podemos garantizar que la información enviada sea completamente segura.
            </span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo Electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>

        <div className="form-row" style={{ gridTemplateColumns: "none" }}>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Asunto *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Describe brevemente el asunto"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Describe tu problema o sugerencia en detalle..."
            rows="6"
            required
          />
        </div>

        {captcha && (
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Enviar Mensaje
          </button>
        )}

        {!captcha && <div className="form-row" style={{ marginTop: "1.5rem" }}>
            <div className="form-group">
              <label htmlFor="captcha" className="form-label">ReCAPTCHA *</label>
              <ReCAPTCHA
                sitekey="6Lc9xk8rAAAAAFZCRO6bkRg9MQ6TMimBvLQZJWw8"
                onChange={(token) => setCaptcha(token)}
                id="captcha"
                />
            </div>
          </div>
        }

      </div>
    </section>
  );
};

export default ContactForm;
