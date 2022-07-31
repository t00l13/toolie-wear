import React from 'react';
import Popup from '../Popup/Popup';
import Card from '../Card/Card';
import './GenerateCard.css'
import {tShirtList,shortsList, hoodieList} from '../../Utils/constants.js'

function GenerateCard({isOpen,onClose}) {
    const [randomShirt, setRandomShirt] = React.useState({});
    const [randomShorts, setRandomShorts] = React.useState({});
    const [randomHoodie, setRandomHoodie] = React.useState({});

    

    function randomIndex(arr) {
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    function randomCard() {
        const tShirt = randomIndex(tShirtList);
        const shorts = randomIndex(shortsList);
        const hoodie = randomIndex(hoodieList);
        setRandomShirt(tShirt);
        setRandomShorts(shorts);
        setRandomHoodie(hoodie);
    }

    return (
        <Popup
        name='generate-clothes'
        title='Случайнаая одежда'
        isOpen={isOpen}
        onClose={onClose}
        >
            <Card link={randomShirt.link}></Card>
            <Card link={randomShorts.link}></Card>
            <Card link={randomHoodie.link}></Card>
            <button className='generate-card__button' onClick={randomCard}>Again</button>
        </Popup>
    );
}

export default GenerateCard;