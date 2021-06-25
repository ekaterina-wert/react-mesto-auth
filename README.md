# Проект Место на Реакте (Front-end)

**Проект-социальная сеть для публикаций/удаления/лайков изображений, с возможностью регистрации и авторизации пользователя. 
UX/UI реализовала с помощью модальных окон и валидируемых форм.**


Проект выполнен с помощью библиотеки REACT  
Верстка сайта в соответствии с макетом в [Figma](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4).  
Реализована адаптивная верстка в диапазоне 320px - 1200px.  
Готовый сайт можно посмотреть [здесь](https://ekaterina-wert.github.io/react-mesto-auth/index)

## **В данном проекте удалось реализовать такие штуки:**

1. Организация файлов по БЭМ.
2. Флексбокс. Грид-сетка.
3. Медиазапросы, адаптивная и резиновая верстка.
4. Оптимизация изображений.
5. GIT branches.
6. Создание всплывающего модального окна(popup). 
7. Использование функциональных компонентов.
8. Использование декларативного подхода.
9. Использование хуков: React.useState и React.useEffectб React.useContext, React.useRef().
10. Обработка запросов к API.
11. Реализация поднятия стейта.
12. Создание глобального стейта с помощью контекста(метод React.createContext), подписка на контекст с помощью хука React.useContext.
13. Работа с полями форм: использование управляемых и неуправляемых(атрибут ref) комнонентов.
14. Реализация регистрации и авторизации на сайте.

## **Сборка проекта осуществляется с помощью библиотеки React**
## **В проекте реальзован декларативный подход с использованием функциональных компонентов и хуков**

## ***Предстоит доработать***
1. Реализовать валидацию форм, индикаторы выполнения загрузки данных на сервер.
2. Реализовать попап подтверждения удаления карточки(сейчас карточка удаляется без подтверждения при нажатии на иконку мусорной корзины).
3. Реализовать верстку для мобильных устройств.
4. Вынести главную страницу со всеми попапами в отдельный компонент.
