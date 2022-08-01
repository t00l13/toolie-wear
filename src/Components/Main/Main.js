import React from 'react';
import './Main.css';
import Profile from '../Profile/Profile';
import WearCategory from '../WearCategory/WearCategory';
import { tShirtList,pantsList, shortsList, hoodieList, accessoriesList } from '../../Utils/constants';
import GenerateIcon from '../../images/icons/generateIcon.svg';
import AddIcon from '../../images/icons/add-button.svg';
function Main(props) {

    return (
        <div className='main'>
            <Profile></Profile>
            <button onClick={props.onGenerateClothes} className='generate__button'>Generate <img className='generate__icon' src={GenerateIcon}></img></button>
            <button onClick={props.onAddClothes} className='generate__button'>Добавить одежду<img className='add-button' src={AddIcon}></img></button>
            <WearCategory
            id='shirts'
            array={tShirtList}
            category='Футболки'
            ></WearCategory>
            <WearCategory
            id='pants'
            array={pantsList}
            category='Штаны'
            ></WearCategory>
            <WearCategory
            id='shorts'
            array={shortsList}
            category='Шорты'
            ></WearCategory>
            <WearCategory
            id='hoodie'
            array={hoodieList}
            category='Толстовки'
            ></WearCategory>
            <WearCategory
            id='access'
            array={accessoriesList}
            category='Аксессуары'
            ></WearCategory>
        </div>
    );
}

export default Main;