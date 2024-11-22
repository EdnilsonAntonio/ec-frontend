import { useNavigate } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/branding/logo.png';
import './navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleRedirect = (page) => {
        navigate(`/${page}`);
    }

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid px-5">
                <a className="navbar-brand" onClick={() => handleRedirect('')}> <img src={Logo} alt="Logo" width="170" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" onClick={() => handleRedirect('')}>Home</a>
                        <a className="nav-link" onClick={() => handleRedirect('about-us')}>Sobre nós</a>
                        <a className="nav-link" onClick={() => handleRedirect('courses')}>Cursos</a>
                        <a className="nav-link" onClick={() => handleRedirect('help-the-project')}>Apoie-nos</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
