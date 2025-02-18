import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="logos">
                        <div className="logo d-flex ">
                            <Link to="/" className="navbar-brand">
                                <img src="https://cdn-icons-png.flaticon.com/256/219/219970.png" alt="Logo" width="40" height="40" />
                            </Link>
                            <h5 className='fw-bold align-items-end d-flex'>Hi, User</h5>
                        </div>
                        <p className='fs-6 m-0 text-body-tertiary'>Hope u have a great day!</p>
                    </div>

                    <div className='d-flex'>
                        <div id="sing-in-wrapper" className="ms-auto me-4">
                            <Link to="/formDoctor" className="nav-link my-auto py-1 px-3 btn btn-outline-primary">Sing In</Link>
                        </div>
                        <div className="ms-auto d-flex align-items-center m-4 gap-3">
                            <GiHamburgerMenu />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}