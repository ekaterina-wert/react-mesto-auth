import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {

  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  });

  function handleChangeData(e) {
    const {name, value} = e.target;

    setUserData({
      ...userData,
      //Важно! для использования конструкции ниже необходимо чтоб названия ключей из стейт-переменной совпадали со значениями name, указанными в инпутах
      [name]: value 
    })
  }
  
  function handleSubmit(e){
    e.preventDefault();

    props.onRegister(userData)
  }

  return (
    <div className="login">
      <p className="login__title">Регистрация</p>
        <form onSubmit={handleSubmit} className="login__form">
          <fieldset className="login__input-container">
            <input 
              type="email" 
              className="login__text login__text_type_email" 
              name="email" 
              value={userData.email} 
              onChange={handleChangeData} 
              placeholder='Email'
              required
            /> 
            <input 
              type="password" 
              className="login__text login__text_type_password" 
              name="password" 
              value={userData.password} 
              onChange={handleChangeData} 
              placeholder='Пароль'
              required
            />
          </fieldset>
          <button className="login__submit" type="submit">Зарегистрироваться</button>
        </form>

        <p className='login__redirection-text'>Уже зарегистрированы?
          <Link to="/signin" className="login__link"> Войти</Link>
        </p>
        
    </div>
  );
}

export default Register;