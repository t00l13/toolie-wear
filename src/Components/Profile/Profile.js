import React from 'react';
import '../Profile/Profile.css'
import ProfileAvatar from '../../images/profileAvatar.png';
import profileGeoIcon from '../../images/icons/profileGeoIcon.svg';
import ProfileCategoryIcon from '../../images/profileCategoryIcon.png';
import { Link } from 'react-scroll';


function Profile(props) {
    return (
        <div className='profile'>
            <div className='profile__wrapper'>
                <img className='profile__avatar' src={ProfileAvatar}></img>
                <div className='profile__info'>
                    <h2 className='profile__name'>Nastiem</h2>
                    <p className='profile__description'>Young designer (junior)</p>
                    <div className='profile__geo'>
                        <img className='profile__icon' src={profileGeoIcon}></img>
                        <p className='profile__city'>Москва</p>
                    </div>
                </div>
            </div>
            <div className='profile__category'>
                <Link to="shirts" offset={-120} duration={500} spy={true} smooth={true}className='profile__category__item'>Футболки</Link>
                <Link to="hoodie" offset={-120} duration={500} spy={true} smooth={true}className='profile__category__item'>Толстовки</Link>
                <Link to="access" offset={-120} duration={500} spy={true} smooth={true} className='profile__category__item' >Аксессуары</Link>
                <Link to="shorts" offset={-120} duration={500} spy={true} smooth={true} className='profile__category__item'>Шорты</Link>
                <Link to="pants" offset={-120} duration={500} spy={true} smooth={true} className='profile__category__item'>Штаны</Link>
            </div>
        </div>
    );
}

export default Profile;