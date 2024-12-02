import React from 'react';
import Header from './Header';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="contactPage">
      <h1>Contact</h1>
      <p>Suntem aici să te ajutăm!</p>
      <h4>Număr de telefon: <a href="tel:+40123456789">+40 123 456 789</a></h4>
      
      <div className="mapContainer">
        <iframe
          title="Locația noastră"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509759!2d144.95373531568013!3d-37.8162187420129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57795bf5c4a6e0!2sYour%20Location!5e0!3m2!1sen!2sro!4v1616669999999!5m2!1sen!2sro"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="contact-info">
   <h2>Contactează-ne pentru servicii de tractare auto</h2>
   <p><strong>Telefon:</strong> <a href="tel:+40712345678">+40 712 345 678</a></p>
   <p><strong>Email:</strong> <a href="mailto:contact@tractariauto.ro">contact@tractariauto.ro</a></p>
   <p><strong>Adresă:</strong> Str. Exemplu, Nr. 123, București, România</p>
   <p><strong>Program:</strong> Luni - Duminică, 24/7</p>
</div>
      </div>
    </div>
    </>
    
  );
};

export default Contact;