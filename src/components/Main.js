import React from "react";
import api from "../utils/api";
import Card from "./Card";
import defaultAvatar from '../images/user-avatar_default.svg';

function Main(props) {

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
      <section class="profile content__element">
        <div class="profile__avatar">
          <img
            src={userAvatar}
            alt="Фотография пользователя"
            class="profile__avatar-image" />
          <button class="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"
            onClick={props.onEditAvatar}></button>
        </div>
        <div class="profile__info">
          <div class="profile__name-block">
            <h1 class="profile__name">{userName}</h1>
            <button
              type="button"
              class="profile__button profile__button_type_edit"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}></button>
          </div>
          <p class="profile__job">{userDescription}</p>
        </div>
        <button
          type="button"
          class="profile__button profile__button_type_add"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}></button>
      </section>

      <section class="cards content__element" aria-label="Фотографии">
        {cards.map(card => (
          <Card
            card={card}
            onCardClick = {props.onCardClick}
            />
        ))}
      </section>
    </main>
  );
}

export default Main;
