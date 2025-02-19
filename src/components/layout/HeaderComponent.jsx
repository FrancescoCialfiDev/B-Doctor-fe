import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';

export default function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [specializations, setSpecializations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDropdownClicked, setIsDropdownClicked] = useState(false);
    const navigate = useNavigate(); // Usa useNavigate per navigare programmaticamente

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownClicked(!isDropdownClicked);
        setDropdownOpen(!dropdownOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
        setIsDropdownClicked(false);
    };

    const handleClickOutside = (event) => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu && !dropdownMenu.contains(event.target) && !event.target.closest('.nav-item')) {
            closeDropdown();
        }
    };

    // Effettua una nuova richiesta ogni volta che la pagina si carica
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

        // Aggiungere un event listener per i clic fuori dal menu
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Effettua la richiesta una sola volta

    const handleSpecializationClick = (id) => {
        // Usa navigate per andare alla pagina della specializzazione
        navigate(`/specializations/${id}`);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="logos">
                        <div className="logo d-flex">
                            <Link to="/" className="navbar-brand">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/256/219/219970.png"
                                    alt="Logo"
                                    width="40"
                                    height="40"
                                />
                            </Link>
                            <h5 className="fw-bold align-items-end d-flex">Hi, User</h5>
                        </div>
                        <p className="fs-6 m-0 text-body-tertiary">Hope u have a great day!</p>
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
                                    onClick={toggleDropdown} // Open or close dropdown
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/256/219/219970.png"
                                        alt="Logo"
                                        width="30"
                                        height="30"
                                    />
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
                                <Link to="/formDoctor" className="nav-link">
                                    Register as a Doctor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/doctors" className="nav-link">
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
