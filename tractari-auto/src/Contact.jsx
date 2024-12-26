import React from "react";
import "./Contact.css";
import Header from "./Header";
import Footer from "./Footer";
import ProgramareInterventie from "./ProgramareInterventie";

function ContactSection() {
  return (
    <>
      <Header />
      <section className="contactSection">
        <h2>Contactează-ne</h2>
        <div className="contactGrid">
          {/* Telefon */}
          <a href="tel:0761866858" className="contactCard">
            <div className="image phone"></div>
            <h3>Sună-ne</h3>
            <p>0761 866 858</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/40761866858?text=Salut!+Am+o+întrebare."
            target="_blank"
            rel="noopener noreferrer"
            className="contactCard"
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
            className="contactCard"
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
            className="contactCard"
          >
            <div className="image instagram"></div>
            <h3>Instagram</h3>
            <p>Vezi postările noastre</p>
          </a>

          {/* Email */}
          <a
            href="mailto:Crazy_cappy@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contactCard"
          >
            <div className="image email"></div>
            <h3>Email</h3>
            <p>Trimite-ne un email</p>
          </a>
        </div>

        <ProgramareInterventie />

        {/* Google Maps */}
        <div className="mapEmbed">
          <iframe
            title="Harta Rosiori de vede"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.1678820516416!2d24.9837963154104!3d44.11098897910738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ad24ff7ed9de1d%3A0xa418d1db7b1d7e3f!2sRo%C8%99iorii%20de%20Vede%2C%20Romania!5e0!3m2!1sen!2sro!4v1689278837081!5m2!1sen!2sro"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactSection;
