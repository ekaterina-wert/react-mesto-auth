import headerLogo from '../images/header__logo.svg';
import React from 'react';
import {Link, Route, Redirect, Switch} from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <a href="#" className="header__link" target="_blank" rel="noopener">
                <img className="header__logo" src={headerLogo} alt="Логотип Место.Россия"/>
            </a>
            <Switch>
                <Route exact path="/">
                    <div className='header__container'>
                        <p className='header__text'>{props.email}</p>
                        <Link to='/signin' onClick={props.onClick} className="header__text header__nav-link">Выйти</Link>
                    </div>
                </Route> 
                   
                <Route path="/signup">
                    <Link to='/signin' className="header__text header__nav-link">Войти</Link>
                </Route>
                
                <Route path="/signin">
                    <Link to='/signup' className="header__text header__nav-link">Регистрация</Link>
                </Route>

                <Route>
                    {props.loggedIn ? <Redirect exact to="/" /> : <Redirect to="/signin" />}
                </Route>
            </Switch>
        </div>
    )
};

export default Header;