import { Link } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="logo.png" alt="Logo" width="50" height="50" />
                    </Link>
                    <div className="ms-auto">
                        <Link to="/doctors" className="nav-link">Doctor List</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}