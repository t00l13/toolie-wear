import React from 'react';
import Popup from '../Popup/Popup.js';
import './AddClothes.css'

function AddClothes({isOpen,onClose, submitButton, onAddItem}) {
    const [category, setCategory] = React.useState('');
    const [link, setLink] = React.useState('');
    const [id, setId] = React.useState('');

    function handleInCategory(evt) {
        setCategory(evt.target.value);
    }

    function handleAddLink(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddItem({category, link, id});
    }

    React.useEffect(() => {
        setCategory('');
        setLink('');
        setId(0);
    }, [isOpen]);

    return (
        <Popup
        name='add-clothes'
        title='Добавить одежду'
        isOpen={isOpen}
        onClose={onClose}
        >
        <form className='add-clothes__area' onSubmit={handleSubmit}>
            <h3 className='add-clothes__input__title'>✨ Выберите категорию ✨</h3>
            <select value={category} onChange={handleInCategory} className='add-clothes__input'  required>
                <option> </option>
                <option value={'Футболки'} className='add-clothes__item'>Футболки</option>
                <option value={'Штаны'} className='add-clothes__item'>Штаны</option>
                <option value={'Толстовка'} className='add-clothes__item'>Толстовки</option>
                <option value={'Шорты'} className='add-clothes__item'>Шорты</option>
                <option value={'Аксессуары'} className='add-clothes__item'>Аксессуары</option>
            </select>
            <h3 className='add-clothes__input__title'>💫 Вставьте ссылку на изображение одежды 💫</h3>
            <input value={link} onChange={handleAddLink} className='add-clothes__input' type={'url'} required></input>
            <button type='submit' className='add-clothes__save'>Добавить</button>
        </form>
        </Popup>
    );
}

export default AddClothes;