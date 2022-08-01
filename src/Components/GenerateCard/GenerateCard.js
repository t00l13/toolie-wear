import React from 'react';
import Popup from '../Popup/Popup';
import Card from '../Card/Card';
import './GenerateCard.css'
import {tShirtList,shortsList, hoodieList, accessoriesList} from '../../Utils/constants.js'

function GenerateCard({isOpen,onClose}) {
    const [randomShirt, setRandomShirt] = React.useState({});
    const [randomShorts, setRandomShorts] = React.useState({});
    const [randomHoodie, setRandomHoodie] = React.useState({});
    const [randomAccess, setRandomAcces] = React.useState({});

    

    function randomIndex(arr) {
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    function randomCard() {
        const tShirt = randomIndex(tShirtList);
        const shorts = randomIndex(shortsList);
        const hoodie = randomIndex(hoodieList);
        const access = randomIndex(accessoriesList);
        setRandomShirt(tShirt);
        setRandomShorts(shorts);
        setRandomHoodie(hoodie);
        setRandomAcces(access);
    }

    return (
        <Popup
        name='generate-clothes'
        title='Случайнаая одежда'
        isOpen={isOpen}
        onClose={onClose}
        >   
            <div className='generate-card__wrapper'>
            <Card link={randomShirt.link}></Card>
            <Card link={randomShorts.link}></Card>
            <Card link={randomHoodie.link}></Card>
            <Card link={randomAccess.link}></Card>
            </div>
            <button className='generate-card__button' onClick={randomCard}>Generate</button>
        </Popup>
    );
}

export default GenerateCard;