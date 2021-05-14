class Auth {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    //проверка ответа сервера
    _checkApiRespond(respond) {
        if (respond.ok) {
            return respond.json()
        }
        return Promise.reject(new Error(`Ошибка! Статус-код:${respond.status}`));
    }

    // Регистрация нового пользователя
    register(password, email) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(password, email)
        })
        .then(res => this._checkApiRespond(res))
    };
     
    // Получение токена
    login(password, email) {
        return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(password, email)
        })
        .then(res => this._checkApiRespond(res))
    };
      
    // Проверка токена и получение информации о пользователе
    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            ...this._headers,
            'Authorization': `Bearer ${token}`
           }
        })
        .then(res => this._checkApiRespond(res))
    }
}

export const auth = new Auth('https://auth.nomoreparties.co');