import React from 'react';
import '../Header/Header.css';
import { Link, useNavigate } from "react-router-dom";

function SignIn(props) {
    return (
        <div>
                <Link to='/login'>
                    <button className='header__signin'></button>
                </Link>
        </div>
    );
}

export default SignIn;