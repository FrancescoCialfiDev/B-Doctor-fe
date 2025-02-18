import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export default function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
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
                            {/* Dropdown Menu */}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                                    onClick={toggleMenu} // Aggiungi la logica per aprire il menu
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/256/219/219970.png"
                                        alt="Logo"
                                        width="30"
                                        height="30"
                                    />
                                    Specializations
                                </Link>
                                <ul className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Cardiology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Dermatology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Neurology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Orthopedics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Pediatrics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Radiology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Psychiatry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Endocrinology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Gastroenterology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Oncology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Pulmonology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Nephrology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Rheumatology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Ophthalmology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Anesthesiology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Urology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Hematology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Allergy and Immunology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Emergency Medicine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Plastic Surgery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            General Surgery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Infectious Disease
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Geriatrics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Sports Medicine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Internal Medicine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Vascular Surgery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Obstetrics and Gynecology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Otolaryngology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Pathology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/specializations" className="dropdown-item" onClick={closeMenu}>
                                            Family Medicine
                                        </Link>
                                    </li>
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
