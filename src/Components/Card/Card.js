
import React from 'react';
import './Card.css';

function Card({link}) {
    return (
        <div>
            <div className='card'>
                <img className='card__img' src={link}/>
            </div>
        </div>
    );
}

export default Card;