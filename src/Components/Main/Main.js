import React from 'react';
import './Main.css';
import Profile from '../Profile/Profile';
import WearCategory from '../WearCategory/WearCategory';
import { tShirtList,pantsList, shortsList, hoodieList, accessoriesList } from '../../Utils/constants';
import GenerateIcon from '../../images/icons/generateIcon.svg'

function Main(props) {
    return (
        <div className='main'>
            <Profile></Profile>
            <button onClick={props.onGenerateClothes} className='generate__button'>Generate <img className='generate__icon' src={GenerateIcon}></img></button>
            <WearCategory
            array={tShirtList}
            category='Футболки'
            ></WearCategory>
            <WearCategory
            array={pantsList}
            category='Штаны'
            ></WearCategory>
            <WearCategory
            array={shortsList}
            category='Шорты'
            ></WearCategory>
            <WearCategory
            array={hoodieList}
            category='Толстовки'
            ></WearCategory>
            <WearCategory
            array={accessoriesList}
            category='Аксессуары'
            ></WearCategory>
        </div>
    );
}

export default Main;