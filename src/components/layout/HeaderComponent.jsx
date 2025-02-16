import { Link } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="logo.png" alt="Logo" width="50" height="50" />
                    </Link>
                    <div className='d-flex'>
                        <div className="ms-auto me-4">
                            <Link to="/doctors" className="nav-link">Sing In</Link>
                        </div>
                        <div className="ms-auto">
                            <Link to="/form" className="nav-link">Doctor List</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}