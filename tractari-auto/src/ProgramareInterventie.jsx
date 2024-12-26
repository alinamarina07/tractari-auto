import "./ProgramareInterventie.css";
import { useState } from "react";


function ProgramareInterventie() {

  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setStatusMessage('Email sent successfully!');
      } else {
        setStatusMessage('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred.');
    }
  }

  return (
    <>
      <div className="scheduleForm">
        <h2>Programare Intervenție</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Nume:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="date">Data programării:</label>
            <input
              type="date"
              id="date"
              name="date"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="time">Ora programării:</label>
            <input
              type="time"
              id="time"
              name="time"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Mesaj (opțional):</label>
            <textarea
              id="message"
              name="message"
            ></textarea>
          </div>

          <button type="submit">Programează Intervenția</button>
        </form>
        {statusMessage && <div>{statusMessage}</div>}/
      </div>
    </>
  );
}

export default ProgramareInterventie;
