import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

return (
    <>
        <header>
            <div className='logoContainer'>
                <div className="img"></div>
                <h1 className="logo">Tractari kpy</h1>
            </div>

            <a href='tel:+40761866858' className='callButton'><FontAwesomeIcon icon={faPhoneSquare} className='phoneIcon' /> 0761866858
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
)
}

export default Header;


