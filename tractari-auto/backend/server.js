const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint pentru trimiterea email-ului
app.post('/api/send-email', async (req, res) => {
  const { name, email, date, time, message } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'All fields except message are required.' });
  }

  try {
    // Configurarea transportului pentru Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'yahoo', // sau alt serviciu suportat
      auth: {
        user: 'alina48am@yahoo.com', // Înlocuiește cu adresa ta
        pass: 'sunttalent', // Înlocuiește cu parola ta (sau un App Password)
      },
    });

    // Configurarea email-ului
    const mailOptions = {
      from: 'alina48am@yahoo.com', // Adresa expeditorului
      to: email, // Adresa destinatarului (în acest caz utilizatorul însuși)
      subject: 'Confirmare Programare Intervenție',
      text: `Bună ${name},\n\nAi programat o intervenție pentru data de ${date} la ora ${time}.\n\nMesajul tău: ${message || 'Niciun mesaj specificat.'}\n\nMulțumim!`,
    };

    // Trimiterea email-ului
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Pornirea serverului
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});