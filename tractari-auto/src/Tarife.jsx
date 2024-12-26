import React, { useState } from 'react';
import './Tarife.css';
import Footer from './Footer';
import Header from './Header';

const TarifeTractari = () => {
  const [distanta, setDistanta] = useState(0);
  const [tipServiciu, setTipServiciu] = useState('tractare');

  // Tarifele pentru diferite servicii
  const tarife = {
    tractare: 100, // prețul per km pentru tractare
    vulcanizare: 70, // prețul per intervenție
    schimbRoata: 90, // prețul per schimb roată
    curentBaterie: 90, // prețul per intervenție
  };



  return (
    <>
    <Header/>
    <section className="tarife">
      <h2>Tarife Tractări Auto și Asistență Rutieră</h2>

      <div className="tarifeContainer">
        <div className="tarifeInfo">
          <h3>Servicii Disponibile:</h3>
          <table className="tarifeTable">
            <thead>
              <tr>
                <th>Serviciu</th>
                <th>Preț</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tractare Auto</td>
                <td>100 Lei / km</td>
              </tr>
              <tr>
                <td>Vulcanizare Roată</td>
                <td>70 Lei</td>
              </tr>
              <tr>
                <td>Schimb Roată</td>
                <td>90 Lei</td>
              </tr>
              <tr>
                <td>Curent Baterie</td>
                <td>90 Lei</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="serviciiExtra">
          <h3>Alte Servicii:</h3>
          <ul>
            <li>Asistență rutieră non-stop</li>
            <li>Intervenții rapide și profesionale</li>
            <li>Transport siguranța vehiculului</li>
            <li>Intervenții pe drumurile din București și din țară</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default TarifeTractari;