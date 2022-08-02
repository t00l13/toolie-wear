import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignIn from '../SignIn/SignIn';
import '../../App.css';
import { Link, useNavigate } from "react-router-dom";
import {useEffect} from 'react';
import { auth, db, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import welcomePerson from '../../images/welcomePerson.png';
import iconFirst from '../../images/icons/icon1.svg';
import iconSecond from '../../images/icons/icon2.svg';
import iconThird from '../../images/icons/icon3.svg';
import iconFour from '../../images/icons/icon4.svg';
import iconFive from '../../images/icons/icon5.svg';
import '../Welcome/Welcome.css';

function Welcome(props) {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
      }, [user, loading]);

    return (
        <>
        <div className='container'>
            <Header
            children={<SignIn
            ></SignIn>}
            ></Header>
            <div className='welcome'>
                <h1 className='welcome__title'>Добро пожаловать</h1>
                <h2 className='welcome__subtitle'>Я помогу вам выбрать, что сегодня надеть!</h2>
                <ul className='welcome__list'>
                    <li className='welcome__item'><img src={iconFirst} className='welcome__icon'/>Загрузите вашу одежду в своем профиле.</li>
                    <li className='welcome__item'><img src={iconSecond} className='welcome__icon'/>После нажмите на кнопку 'Generate'</li>
                    <li className='welcome__item'><img src={iconThird} className='welcome__icon'/>Вам выпадедет случайная одежда</li>
                    <li className='welcome__item'><img src={iconFour} className='welcome__icon'/>Вы больше можете не тратить время на выбор одежды</li>
                    <li className='welcome__item'><img src={iconFive} className='welcome__icon'/>Сделайте это ради новых впечатлений</li>
                </ul>
                <img src={welcomePerson} className='welcome__img'></img>
                <Link to='/login'>
                    <button className='welcome__btn'>Lets'go</button>
                </Link>
                
            </div>
            </div>
            <Footer></Footer>
         </>
    );
}

export default Welcome;