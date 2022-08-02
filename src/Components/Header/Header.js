import React from 'react';
import HeaderLogo from '../../images/HeaderLogo.svg';
import '../Header/Header.css';

function Header(props) {
    return (
        <div className='header'>
            <img className='header__logo' src={HeaderLogo}></img>
            {props.children}
        </div>
    );
}

export default Header;