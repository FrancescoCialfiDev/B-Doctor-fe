import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';

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
                    <div className="logos">
                        <div className="logo d-flex">
                            <Link to="/" className="navbar-brand ms-0">
                                <img
                                    src="https://banner2.cleanpng.com/20181215/gag/kisspng-clip-art-vector-graphics-computer-icons-stethoscop-medical-stethoscope-svg-png-icon-free-download-1-1713909590626.webp"
                                    alt="Logo"
                                    width="40"
                                    height="40"
                                />
                            </Link>
                            <h5 className="fw-bold align-items-end d-flex">Hi, User</h5>
                        </div>
                        <p className="fs-6 m-0 text-body-tertiary">Hope you have a great day!</p>
                    </div>

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
                                    Specializations
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
