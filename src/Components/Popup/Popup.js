import React from 'react';
import '../Popup/Popup.css'

function Popup({name, title, isOpen, onClose, children, btnName}) {

React.useEffect(() => {

    if(!isOpen) return;
// ЗАКРЫТИЕ ПОПАПА ПО КНОПКЕ ESC
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
// ЗАКРЫТИЕ ПОПАПА ПО КЛИКЕ ВНЕ ОБЛАСТИ
    const handlePopupClick = (event) => {
      if (event.target.classList.contains('popup')) {
        onClose();
      }
    }
//ВЕШАЕМ СЛУШАТЕЛИ 
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('mousedown', handlePopupClick);
//УДАЛЯЕМ СЛУШАТЕЛИ
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handlePopupClick);
    };

  }, [isOpen, onClose]);

  return (
    <div>
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : false }`} id={`popup-${name}`}>
          <div className="popup__container">
            <button onClick={onClose} type="button" className="popup__btn-close"></button>
            <h3 className="popup__title">{title}</h3>
              {children}
          </div>
      </div>
    </div>
  )
}

export default Popup;