import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ background: '#8fbeda' }}>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Cultura</Link>
                <ul className="right">
                    <li><Link to='/autores'>Autores</Link></li>
                    <li><Link to='/livros'>Livros</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;