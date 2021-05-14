import React from 'react';

function Login(props) {
    const [userData, setUserData] = React.useState({
      email: props.data.email,
      password: props.data.password,
    });

    function handleChangeData(e) {
      const {name, value} = e.target;

        setUserData({
            ...userData,
            [name]: value 
        })
    }

    function handleSubmit(e){
      e.preventDefault();

      props.onLogin(userData)
    }

  return(
    <div className="login">
      <p className="login__title">Вход</p>
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
        <button className="login__submit" type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login;