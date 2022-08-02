import React from 'react';
import '../Header/Header.css';

function LogOut(props) {
    return (
        <div>
           <button className='header__logout' onClick={props.logOut}></button>
        </div>
    );
}

export default LogOut;