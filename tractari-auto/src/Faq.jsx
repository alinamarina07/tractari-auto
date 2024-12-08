import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Listează întrebările și răspunsurile
  const faqs = [
    {
      question: 'Cât durează să ajungeți la locul incidentului?',
      answer: 'De obicei, ajungem în 30-45 de minute.',
    },
    {
      question: 'Care sunt costurile?',
      answer: 'Costurile depind de distanță și tipul vehiculului. Contactați-ne pentru un calcul personalizat.',
    },
    {
      question: 'Oferiți servicii 24/7?',
      answer: 'Da, suntem disponibili non-stop pentru tractări auto și asistență rutieră.',
    },
  ];

  // Controlează răspunsurile afișate
  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Întrebări frecvente</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="question">
          <h3 onClick={() => toggleAnswer(index)}>
            {faq.question}
          </h3>
          {activeQuestion === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;