import React from 'react';
import LinkWrapper from '../LinkWrapper';

const Header = () => {
    return (
        <nav style={{ background: '#8fbeda' }}>
            <div className="header-wrapper">
                <div className="header-left-blank"></div>
                <div className="header-center-content">
                    <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Smart Games</LinkWrapper>
                </div>
                <div className="header-right-content">
                    <ul className="right">
                        <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
                        <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
                        <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;