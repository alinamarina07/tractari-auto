import Header  from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import './Acasa.css';

function HomePage(){
    return (
        <>
            <Header/>
            <div className='box'>
            <img src='../public/374943075_1031041638343082_6449772257998324000_n.jpg' className='imgAcasa'></img>
            <div className='text'>
            <h1>Ai nevoie de asistenta rutiera?</h1>
            <h4>Da-ne un telefon si venim in cel mai scurt timp!</h4>
            <a href='./contact' className='callButton'><FontAwesomeIcon icon={faPhoneSquare} className='phoneIcon' />Contacteaza-ma!</a>
            </div>
            </div>
        </>
    )
}

export default HomePage;
