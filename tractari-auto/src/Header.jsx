import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    });

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

return (
    <>
        <header>
            <div>
                <img src='/Logo-Final-SOS-Tractari-Alb-dar-negru.png' className="image"></img>
                <div className="logo">Tractari kpy</div>
            </div>

            <a href='tel:+40761866858' 
            className='callButtonHeader'>
                <FontAwesomeIcon icon={faPhoneSquare} 
                className='phoneIcon' /> 
                Apel direct: 0761866858
            </a>

            <a href="https://wa.me/40761866858?text=Salut!+Vreau+mai+multe+informații."
            className="whatsappButtonHeader"
            target="_blank"
            rel="noopener noreferrer">
                <FaWhatsapp className="whatsappIcon" /> 
                Chat: WhatsApp
            </a>

            <a className="yahooButtonHeader"
            href="mailto:Crazy_cappy@yahoo.com?subject=Cerere%20Informatii&body=Salut!%20Doresc%20mai%20multe%20informații." 
            target="_blank"
            rel="noopener noreferrer">
                <FaEnvelope className="emailIcon" /> 
                Email: Crazy_cappy@yahoo.com
            </a>

        <nav className={`menu ${isOpen ? 'active' : ''}`}>
            <ul>
                <li><button onClick={() => navigate('/acasa')}>Acasa</button ></li>
                <li><button onClick={() => navigate('/asistenta-rutiera')}>Asistenta rutiera</button></li>
                <li><button onClick={() => navigate('/contact')}>Contact</button></li>
                <li><button onClick={() => navigate('/tarife')}>Tarife</button></li>
                
            </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        </header>
    </>
)
}

export default Header;
