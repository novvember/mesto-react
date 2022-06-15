import React from "react";
import api from "../utils/api";
import Card from "./Card";
import defaultAvatar from '../images/user-avatar_default.svg';

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {

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
            src={currentUser.avatar}
            alt="Фотография пользователя"
            className="profile__avatar-image" />
          <button className="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__button profile__button_type_edit"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
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
