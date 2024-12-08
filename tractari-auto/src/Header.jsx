import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare} from '@fortawesome/free-solid-svg-icons';

import { FaWhatsapp } from "react-icons/fa"; // Icon WhatsApp
import { FaEnvelope } from "react-icons/fa"; // Icon Yahoo


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    
return (
    <>
        <header>
            <div className='logoContainer'>
                <div className="img"></div>
                <h1 className="logo">Tractari kpy</h1>
            </div>

            <a href='tel:+40761866858' className='callButton'><FontAwesomeIcon icon={faPhoneSquare} className='phoneIcon' /> Apel direct: 0761866858
            </a>

            <a href="https://wa.me/40761866858?text=Salut!+Vreau+mai+multe+informații."
            className="cont"
            target="_blank"
            rel="noopener noreferrer"><FaWhatsapp className="whatsappIcon" /> Chat: WhatsApp
            </a>

            <a
        className="yahooButton"
        href="mailto:Crazy_cappy@yahoo.com?subject=Cerere%20Informatii&body=Salut!%20Doresc%20mai%20multe%20informații."
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className="emailIcon" /> Email: Crazy_cappy@yahoo.com
      </a>

        <nav className='menu'>
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
);
}

export default Header;
