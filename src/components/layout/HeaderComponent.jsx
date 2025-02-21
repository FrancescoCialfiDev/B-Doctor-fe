import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import logo from "../../public/logo.png"
export default function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato per il menu hamburger
    const [dropdownOpen, setDropdownOpen] = useState(false); // Stato per il dropdown delle specializzazioni
    const [specializations, setSpecializations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDropdownClicked, setIsDropdownClicked] = useState(false); // Traccia il clic nel dropdown
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Apre/chiude il menu hamburger
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownClicked(true);
        setDropdownOpen(!dropdownOpen); // Apre/chiude il dropdown delle specializzazioni
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Chiude il menu hamburger
    };

    const closeDropdown = () => {
        setDropdownOpen(false); // Chiude il dropdown delle specializzazioni
        setIsDropdownClicked(false);
    };

    const handleClickOutside = (event) => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const menuButton = document.querySelector('.navbar-toggler');
        const navbarNav = document.querySelector('#navbarNav');

        // Controlla se il clic è fuori dal menu hamburger e fuori dal dropdown
        if (
            (dropdownMenu && !dropdownMenu.contains(event.target) && !event.target.closest('.nav-item')) ||
            (menuButton && !menuButton.contains(event.target) && !navbarNav.contains(event.target))
        ) {
            closeDropdown(); // Chiude il dropdown se il clic è fuori dal dropdown
        }

        // Chiude il menu hamburger se clicchi fuori dal menu
        if (menuButton && !menuButton.contains(event.target) && !navbarNav.contains(event.target)) {
            closeMenu(); // Chiude il menu hamburger se il clic è fuori
        }
    };

    useEffect(() => {
        fetch('http://localhost:3000/specializations')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.specializations)) {
                    setSpecializations(data.specializations);
                } else {
                    console.error("Dati specializzazioni non trovati o non sono un array", data);
                    setSpecializations([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nel recupero delle specializzazioni:', error);
                setLoading(false);
            });

        // Aggiungi l'event listener per i clic fuori dal menu
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Effettua la richiesta una sola volta

    const handleSpecializationClick = (id) => {
        navigate(`/specializations/${id}`);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">


                    <Link to="/" className="navbar-brand ms-3">
                        <img
                            src={logo}
                            alt="Logo"

                            height="40"
                        />
                    </Link>
                    <Loader />





                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <GiHamburgerMenu />
                    </button>

                    <div
                        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-auto">
                            {/* Dropdown Menu per le Specializzazioni */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="#"
                                    onClick={toggleDropdown} // Apre/chiude il dropdown
                                >
                                    ▼ Specializations
                                </Link>
                                <ul
                                    className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                                >
                                    {loading ? (
                                        <li>Loading...</li>
                                    ) : (
                                        specializations.map(specialization => (
                                            <li key={specialization.id}>
                                                <Link
                                                    to={`/specializations/${specialization.id}`}
                                                    className="dropdown-item"
                                                    onClick={() => handleSpecializationClick(specialization.id)} // Naviga senza ricaricare
                                                >
                                                    {specialization.name}
                                                </Link>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/formDoctor" className="nav-link"
                                    onClick={() => closeDropdown()} // Chiude il dropdown quando clicchi su "Register as a Doctor"
                                >
                                    Register as a Doctor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/doctors" className="nav-link"
                                    onClick={() => closeDropdown()} // Chiude il dropdown quando clicchi su "List All Doctors"
                                >
                                    List All Doctors
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="content mx-3 mt-2 d-none d-md-block">
                <div className="pill">
                    <div className="medicine">
                        <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
                    </div>
                    <div className="side" />
                    <div className="side" />
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .content {
    width: 4vmin;  /* Reduced from 10vmin */
    height: 10vmin; /* Reduced from 25vmin */
    background: #fff0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pill {
    background: #fff0;
    width: 2vmin;   /* Reduced from 5vmin */
    height: 8vmin;  /* Reduced from 20vmin */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: rotate(180deg);
    animation: spin 4s linear 0s infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(-540deg);
    }
  }

  .pill .side {
    background: #f7c340;
    position: relative;
    overflow: hidden;
    width: 2.2vmin;  /* Reduced from 5.5vmin */
    height: 3vmin; /* Reduced from 7.5vmin */
    border-radius: 6vmin 6vmin 0 0;
  }

  .pill .side + .side {
    background: #d9680c;
    border-radius: 0 0 6vmin 6vmin;
    border-top: 1vmin solid #621e1a;
    animation: open 2s ease-in-out 0s infinite;
  }

  @keyframes open {
    0%,
    20%,
    80%,
    100% {
      margin-top: 0;
    }
    30%,
    70% {
      margin-top: 5vmin; /* Reduced from 10vmin */
    }
  }

  .pill .side:before {
    content: "";
    position: absolute;
    width: 1vmin; /* Reduced from 2vmin */
    height: 5vmin; /* Reduced from 10vmin */
    bottom: 0;
    right: 0.75vmin; /* Reduced from 1.5vmin */
    background: #fff2;
    border-radius: 1vmin 1vmin 0 0;
    animation: shine 1s ease-out -1s infinite alternate-reverse;
  }

  .pill .side + .side:before {
    bottom: inherit;
    top: 0;
    border-radius: 0 0 1vmin 1vmin;
  }

  .pill .side:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    border-radius: 6vmin 6vmin 0 0;
    border: 1vmin solid #00000022; /* Reduced from 1.75vmin */
    border-bottom-color: #fff0;
    border-bottom-width: 0vmin;
    border-top-width: 1vmin;
    animation: shadow 1s ease -1s infinite alternate-reverse;
  }

  .pill .side + .side:after {
    bottom: inherit;
    top: 0;
    border-radius: 0 0 6vmin 6vmin;
    border-top-color: #fff0;
    border-top-width: 0vmin;
    border-bottom-width: 1vmin;
  }

  @keyframes shine {
    0%,
    46% {
      right: 0.75vmin; /* Reduced from 1.5vmin */
    }
    54%,
    100% {
      right: 3.75vmin; /* Reduced from 7.5vmin */
    }
  }

  @keyframes shadow {
    0%,
    49.999% {
      transform: rotateY(0deg);
      left: 0;
    }
    50%,
    100% {
      transform: rotateY(180deg);
      left: -1.5vmin; /* Reduced from -3vmin */
    }
  }

  .medicine {
    position: absolute;
    width: calc(100% - 3vmin); /* Reduced from 6vmin */
    height: calc(100% - 6vmin); /* Reduced from 12vmin */
    background: #fff0;
    border-radius: 5vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .medicine i {
    width: 0.5vmin; /* Reduced from 1vmin */
    height: 0.5vmin; /* Reduced from 1vmin */
    background: #47c;
    border-radius: 100%;
    position: absolute;
    animation: medicine-dust 1.75s ease 0s infinite alternate;
  }

  .medicine i:nth-child(2n + 2) {
    width: 0.75vmin; /* Reduced from 1.5vmin */
    height: 0.75vmin; /* Reduced from 1.5vmin */
    margin-top: -2.5vmin; /* Reduced from -5vmin */
    margin-right: -2.5vmin; /* Reduced from -5vmin */
    animation-delay: -0.2s;
  }

  .medicine i:nth-child(3n + 3) {
    width: 1vmin; /* Reduced from 2vmin */
    height: 1vmin; /* Reduced from 2vmin */
    margin-top: 2vmin; /* Reduced from 4vmin */
    margin-right: 1.5vmin; /* Reduced from 3vmin */
    animation-delay: -0.33s;
  }

  .medicine i:nth-child(4) {
    margin-top: -2.5vmin; /* Reduced from -5vmin */
    margin-right: 2vmin; /* Reduced from 4vmin */
    animation-delay: -0.4s;
  }

  .medicine i:nth-child(5) {
    margin-top: 2.5vmin; /* Reduced from 5vmin */
    margin-right: -2vmin; /* Reduced from -4vmin */
    animation-delay: -0.5s;
  }

  .medicine i:nth-child(6) {
    margin-top: 0vmin;
    margin-right: -1.75vmin; /* Reduced from -3.5vmin */
    animation-delay: -0.66s;
  }

  .medicine i:nth-child(7) {
    margin-top: -0.5vmin; /* Reduced from -1vmin */
    margin-right: 3.5vmin; /* Reduced from 7vmin */
    animation-delay: -0.7s;
  }

  .medicine i:nth-child(8) {
    margin-top: 3vmin; /* Reduced from 6vmin */
    margin-right: -0.5vmin; /* Reduced from -1vmin */
    animation-delay: -0.8s;
  }

  .medicine i:nth-child(9) {
    margin-top: 2vmin; /* Reduced from 4vmin */
    margin-right: -3.5vmin; /* Reduced from -7vmin */
    animation-delay: -0.99s;
  }

  .medicine i:nth-child(10) {
    margin-top: -3vmin; /* Reduced from -6vmin */
    margin-right: 0vmin;
    animation-delay: -1.11s;
  }

  .medicine i:nth-child(1n + 10) {
    width: 0.3vmin; /* Reduced from 0.6vmin */
    height: 0.3vmin; /* Reduced from 0.6vmin */
  }

  .medicine i:nth-child(11) {
    margin-top: 3vmin; /* Reduced from 6vmin */
    margin-right: 3vmin; /* Reduced from 6vmin */
    animation-delay: -1.125s;
  }

  .medicine i:nth-child(12) {
    margin-top: -3.5vmin; /* Reduced from -7vmin */
    margin-right: -3.5vmin; /* Reduced from -7vmin */
    animation-delay: -1.275s;
  }

  .medicine i:nth-child(13) {
    margin-top: -0.5vmin; /* Reduced from -1vmin */
    margin-right: 1.5vmin; /* Reduced from 3vmin */
    animation-delay: -1.33s;
  }

  .medicine i:nth-child(14) {
    margin-top: -1.5vmin; /* Reduced from -3vmin */
    margin-right: -0.5vmin; /* Reduced from -1vmin */
    animation-delay: -1.4s;
  }

  .medicine i:nth-child(15) {
    margin-top: -0.5vmin; /* Reduced from -1vmin */
    margin-right: -3.5vmin; /* Reduced from -7vmin */
    animation-delay: -1.55s;
  }

  @keyframes medicine-dust {
    0%,
    100% {
      transform: translate3d(0vmin, 0vmin, -0.1vmin);
    }
    25% {
      transform: translate3d(0.125vmin, 2.5vmin, 0vmin); /* Reduced from 0.25vmin and 5vmin */
    }
    75% {
      transform: translate3d(-0.05vmin, -2vmin, 0.125vmin); /* Reduced from -0.1vmin and -4vmin and 0.25vmin */
    }
  }
`;

