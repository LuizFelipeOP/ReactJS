import React from 'react';
import LinkWrapper from '../LinkWrapper';

const Header = () => {
    return (
        <nav style={{ background: '#8fbeda' }}>
            <div className="nav-wrapper">
                <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Cultura</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
                    <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
                    <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;