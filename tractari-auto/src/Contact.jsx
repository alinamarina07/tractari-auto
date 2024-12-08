import React from 'react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';


function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      // Trimite datele către backend folosind axios
      // const response = await axios.post('https://your-backend-url.com/api/schedule', formData);

      const response = await axios.post('/api/messages', formData);
      if (response.status === 200) {
        // Afișează un mesaj de succes
        alert('Programarea a fost trimisă cu succes!');
        setFormData({
          name: '',
          email: '',
          date: '',
          time: '',
          message: ''
        });
      }
    } catch (error) {
      // Afișează un mesaj de eroare
      console.error('Error submitting form:', error);
      alert('A apărut o eroare la trimiterea programării. Încercați din nou.');
    }
    // Aici poți adăuga logica pentru trimiterea datelor
    console.log('Form submitted', formData);
  };

  return (
    <>
    <Header/>
    <section className="contact-section">
      <h2>Contactează-ne</h2>
      <div className="contact-grid">
        {/* Telefon */}
        <a href="tel:0761866858" className="contact-card">
          <div className="image phone"></div>
          <h3>Sună-ne</h3>
          <p>0761 866 858</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/40761866858?text=Salut!+Am+o+întrebare."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="image whatsapp"></div>
          <h3>WhatsApp</h3>
          <p>Scrie-ne pe WhatsApp</p>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/adryan.cappy.7"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="image facebook"></div>
          <h3>Facebook</h3>
          <p>Urmărește-ne pe Facebook</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/cappyadryan?igsh=MTJyeXZtbHN6aXV0ZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="image instagram"></div>
          <h3>Instagram</h3>
          <p>Vezi postările noastre</p>
        </a>

        {/* Email */}
        <a
        href='mailto:Crazy_cappy@yahoo.com'
        target='_blank'
        rel='noopener noreferrer'
        className="contact-card"
        >
        <div className="image email"></div>
          <h3>Email</h3>
          <p>Trimite-ne un email</p>
      </a>
      </div>


      <section className='scheduleForm'>
    <div className="schedule-form">
      <h2>Programare Intervenție</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nume:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Data programării:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Ora programării:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mesaj (opțional):</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Programează Intervenția</button>
      </form>
    </div>
    </section>

      {/* Google Maps */}
      <div className="map-embed">
      <iframe
        title="Harta Rosiori de vede"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.1678820516416!2d24.9837963154104!3d44.11098897910738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ad24ff7ed9de1d%3A0xa418d1db7b1d7e3f!2sRo%C8%99iorii%20de%20Vede%2C%20Romania!5e0!3m2!1sen!2sro!4v1689278837081!5m2!1sen!2sro"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    </section>

    <Footer/>
    </>
  );
};

export default ContactSection;