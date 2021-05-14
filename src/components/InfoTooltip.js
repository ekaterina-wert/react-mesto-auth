import React from 'react';
import popupIconSucceed from '../images/tooltip-icon_succeed.svg';
import popupIconFailed from '../images/tooltip-icon_failed.svg';


function InfoTooltip(props) {
    return (
        <div className={`popup popup_type_info-tooltip ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__flex-container">
                <div className="popup__container">
                    <img className='popup__icon' src={props.isSucceed ? popupIconSucceed : popupIconFailed} alt={props.title} />
                    <h2 className="popup__title popup__title_type_tooltip">
                        {props.isSucceed ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
                    </h2>  
                </div>
                <button className="popup__close-button" type="button" aria-label="Закрыть модальное окно" onClick={props.onClose} />
            </div>
        </div>
    )
}

export default InfoTooltip;