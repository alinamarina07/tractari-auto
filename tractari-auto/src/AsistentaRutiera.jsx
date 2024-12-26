import Header from "./Header";
import './AsistentaRutiera.css';
import Footer from "./Footer";

function AsistentaRutiera () {
    return (
        <>
        <Header/>
        <section className="asistentaRutiera">
          <h1>
            Pe lângă serviciul de tractări auto, echipa noastră oferă și servicii de
            asistență rutieră și reparații auto, indiferent de locație, oră, moment
            sau situație.
          </h1>
          <p>
            Echipa noastră poate fi contactată și telefonic pentru consiliere și
            asistență. Asistența rutieră este foarte importantă pentru siguranța
            oricărei călătorii, iar echipa noastră oferă servicii de asistență rutieră
            non-stop în București și în țară.
          </p>
          <p>
            Multe situații riscante pot fi evitate dacă mașina îndeplinește toate
            normele de siguranță și funcționează în parametrii normali.
          </p>
  
          <h2>Lipsa de experiență poate fi un impediment, iar acesta este un domeniu în care riscul ar trebui să fie inexistent.</h2>
          <p>
            Dacă ați rămas în pană sau aveți orice alt motiv care vă împiedică să
            efectuați o călătorie sigură, compania noastră specializată în tractări auto
            și asistență rutieră este pregătită să vă vină în ajutor pentru rezolvarea
            problemelor pe care le aveți.
          </p>
          <p>
            Reparatia se poate face pe loc, iar în cazul în care sunt necesare
            intervenții mai ample, suntem pregătiți să vă conducem la un service auto
            profesional pentru a vă rezolva situația.
          </p>
  
          <h2>Despre Noi</h2>
          <p>
            Serviciile de asistență rutieră (<span className="highlight">tractare, vulcanizare, schimbat roată, curent baterie</span> etc.)
            sunt disponibile <strong>non-stop</strong>.
          </p>
          <p>
            Firma noastră este dedicată să ofere servicii <strong>de calitate</strong> la
            prețuri accesibile. Suntem o echipă profesionistă cu experiență vastă în
            domeniu și intervenim prompt pentru rezolvarea oricărei situații.
          </p>
          <p>
            Spre deosebire de un „prieten”, noi dispunem de cunoștințe și echipamente
            necesare pentru a transporta și repara mașina în cel mai <strong>sigur și
            eficient</strong> mod posibil.
          </p>
  
          <h2>Lista Serviciilor</h2>
          <table>
            <thead>
              <tr>
                <th>Serviciu Asistență Rutieră</th>
                <th>Mentiuni</th>
                <th>Preț</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vulcanizare roată</td>
                <td>39 Lei / Oră (aplicat până la remedierea defecțiunii)</td>
                <td>70 Lei – preț vulcanizare</td>
              </tr>
              <tr>
                <td>Curent baterie</td>
                <td>69 Lei / Oră (aplicat până la remedierea defecțiunii)</td>
                <td>90 Lei</td>
              </tr>
              <tr>
                <td>Schimb roată</td>
                <td>69 Lei / Oră (aplicat până la remedierea defecțiunii)</td>
                <td>90 Lei</td>
              </tr>
              <tr>
                <td>Staționare</td>
                <td>80 Lei / Oră (aplicat până la remedierea defecțiunii)</td>
                <td>80 Lei – plată extra / oră</td>
              </tr>
            </tbody>
          </table>
  
          <a href="tel:+40761866858" className="buttonAsistentaRutiera">Sună acum pentru asistență!</a>
        </section>
  
        <Footer/>
      </>
       
    )
}

export default AsistentaRutiera;