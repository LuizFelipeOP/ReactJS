import React from 'react';

const Header = () => {
    return (
        <nav style={{ background: '#8fbeda' }}>
            <div className="nav-wrapper">
                <a href="/teste" className="brand-logo">Livraria Lufe</a>
                <ul className="right">
                    <li><a href="/teste">Autores</a></li>
                    <li><a href="/teste">Livros</a></li>
                    <li><a href="/teste">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;