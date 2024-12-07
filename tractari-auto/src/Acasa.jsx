import Header  from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import './Acasa.css';

function HomePage(){
    return (
        <>
            <Header/>
            <h1 className='titleTractari'>Tractari auto Teleorman. Transport utilaje.</h1>
            <div className='box'>
            <img src='../public/374943075_1031041638343082_6449772257998324000_n.jpg' className='imgAcasa'></img>
            <div className='textBox'>
            <h1>Ai nevoie de asistenta rutiera?</h1>
            <h4>Da-ne un telefon si venim in cel mai scurt timp!</h4>
            <a href='./contact' className='call'><FontAwesomeIcon icon={faPhoneSquare} className='phoneIcon' />Contacteaza-ne!</a>
            {/* <p>Kpy srl va ofera servicii complete de tractari auto, tractari camioane si transport utilaje de constructii, agricole 
                si echipamente industriale, precum si asistenta rutiera:
                <li>autovehicule noi, autovehicule neinmatriculate etc</li>
                <li>autovehicule defecte sau avariate</li>
                <li>tractare autovehicule la RAR, ITP, dezmembrari auto, programul „Rabla” etc</li>
            </p> */}
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
        </>
    )
}

export default HomePage;
