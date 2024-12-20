import Header  from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import './Acasa.css';
import Footer from './Footer';
import Faq from './Faq';

function HomePage(){
    return (
        <>
            <Header/>
            <h1 className='titleTractari'>Tractari auto Teleorman. Transport utilaje.</h1>
            <div className='box'>
            <img src='../public/bjn.jpg' className='imgAcasa'></img>
            <div className='textBox'>
            <h1>Ai nevoie de asistenta rutiera?</h1>
            <h4>Da-ne un telefon si venim in cel mai scurt timp!</h4>
            <a href='./contact' className='call'><FontAwesomeIcon icon={faPhoneSquare} className='phoneIcon' />Contacteaza-ne!</a>
            <div className="container">
        <p>Kpy srl vă oferă servicii complete de tractări auto, tractări camioane și transport utilaje de construcții, agricole 
            și echipamente industriale, precum și asistență rutieră:
        </p>
        <ul>
            <li>Autovehicule noi, autovehicule neînmatriculate etc</li>
            <li>Autovehicule defecte sau avariate</li>
            <li>Tractare autovehicule la RAR, ITP, dezmembrări auto, programul „Rabla” etc</li>
        </ul>
    </div>
            </div>
        </div>
        <div className='text2'>
            <h3>Tractari auto super ieftine!</h3>
            <p>Orientarea catre client a fost mereu o prioritate pentru firma noastra, 
                de aceea acordam o atentie deosebita cerintelor si nevoilor Dvs. 
                Vom interveni rapid de fiecare data cand veti avea nevoie de noi si vom 
                face intodeauna tot posibilul pentru a eficientiza costurile si timpul Dvs.
                Va puteti baza 24/7 pe serviciile noastre de tractari auto si asistenta rutiera.</p>
        </div>

        <Faq/>

        <Footer/>
        </>
    )
}

export default HomePage;
