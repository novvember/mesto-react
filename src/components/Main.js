import React from "react";
import api from "../utils/api";

function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState('#');
  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription ] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
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
        <template id="card">
          <div class="card">
            <img
              src="#"
              alt="#"
              class="card__image" />
            <div class="card__description">
              <h2 class="card__title">#</h2>
              <div class="card__like">
                <button
                type="button"
                class="card__like-button"
                aria-label="Добавить в избранное"></button>
                <span class="card__like-count"></span>
              </div>

            </div>
            <button
              type="button"
              class="card__delete-button"
              aria-label="Удалить"></button>
          </div>
        </template>
      </section>
    </main>
  );
}

export default Main;
