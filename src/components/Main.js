import React from "react";
import api from "../utils/api";
import Card from "./Card";
import defaultAvatar from '../images/user-avatar_default.svg';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);
  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription ] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(err => console.error(err));

    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <section className="profile content__element">
        <div className="profile__avatar">
          <img
            src={userAvatar}
            alt="Фотография пользователя"
            className="profile__avatar-image" />
          <button className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__button profile__button_type_edit"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button profile__button_type_add"
          aria-label="Добавить фотографию"
          onClick={onAddPlace}></button>
      </section>

      <section className="cards content__element" aria-label="Фотографии">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick = {onCardClick}
            />
        ))}
      </section>
    </main>
  );
}

export default Main;
