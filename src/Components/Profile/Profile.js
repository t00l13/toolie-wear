import React from 'react';
import '../Profile/Profile.css'
import ProfileAvatar from '../../images/profileAvatar.png';
import profileGeoIcon from '../../images/icons/profileGeoIcon.svg';
import ProfileCategoryIcon from '../../images/profileCategoryIcon.png'

function Profile(props) {
    return (
        <div className='profile'>
            <img className='profile__avatar' src={ProfileAvatar}></img>
            <div className='profile__info'>
                <h2 className='profile__name'>Nastiem</h2>
                <p className='profile__description'>Young designer (junior)</p>
                <div className='profile__geo'>
                    <img className='profile__icon' src={profileGeoIcon}></img>
                    <p className='profile__city'>Москва</p>
                </div>
            </div>
            <img className='profile__category__icon' src={ProfileCategoryIcon}></img>
            <div className='profile__category'>
                <p className='profile__category__item'>Футболки</p>
                <p className='profile__category__item'>Толстовки</p>
                <p className='profile__category__item'>Аксессуары</p>
                <p className='profile__category__item'>Шорты</p>
                <p className='profile__category__item'>Штаны</p>
            </div>
        </div>
    );
}

export default Profile;