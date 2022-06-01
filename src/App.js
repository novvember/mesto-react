import logo from './images/header__logo_light.svg';

function App() {
  return (

    <div class="content">

      <header class="header content__element content__element_type_header">
        <img
          src={logo}
          alt="Сервис Место-Россия. Логотип"
          class="header__logo" />
      </header>

    <main>

      <section class="profile content__element">
        <div class="profile__avatar">
          <img
            src="#"
            alt="Фотография пользователя"
            class="profile__avatar-image" />
          <button class="profile__avatar-button"
            type="button"
            aria-label="Обновить аватар"></button>
        </div>
        <div class="profile__info">
          <div class="profile__name-block">
            <h1 class="profile__name">. . .</h1>
            <button type="button" class="profile__button profile__button_type_edit" aria-label="Редактировать профиль"></button>
          </div>
          <p class="profile__job"></p>
        </div>
        <button type="button" class="profile__button profile__button_type_add" aria-label="Добавить фотографию"></button>
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

    <footer class="footer content__element">
      <p class="footer__copyright">&copy;&nbsp;2022 Дмитрий Калугин</p>
    </footer>


    <div class="popup popup_type_edit-profile">
      <div class="popup__container content__element">
        <h2 class="popup__title">Редактировать профиль</h2>
        <form class="popup__form" name="profileEditPopupForm" novalidate>
          <label class="popup__field">
            <input
              type="text"
              class="popup__input popup__input_type_name"
              placeholder="Имя"
              name="name"
              id="name-input"
              minlength="2"
              maxlength="40"
              required />
            <span class="popup__input-error name-input-error"></span>
          </label>

          <label class="popup__field">
            <input
              type="text"
              class="popup__input popup__input_type_job"
              id="job-input"
              placeholder="Профессия"
              name="job"
              minlength="2"
              maxlength="200"
              required />
            <span class="popup__input-error job-input-error"></span>
          </label>

          <button class="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button class="popup__cancel-button" type="button" aria-label="Закрыть окно"></button>
      </div>
    </div>

    <div class="popup popup_type_change-avatar">
      <div class="popup__container content__element">
        <h2 class="popup__title">Обновить аватар</h2>
        <form class="popup__form" name="avatarChangePopupForm" novalidate>
          <label class="popup__field">
            <input
              type="url"
              class="popup__input popup__input_type_link"
              id="avatar-link-input"
              placeholder="Ссылка на картинку"
              name="link"
              required />
            <span class="popup__input-error avatar-link-input-error"></span>
          </label>
          <button class="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button class="popup__cancel-button" type="button" aria-label="Закрыть окно"></button>
      </div>
    </div>

    <div class="popup popup_type_add-card">
      <div class="popup__container content__element">
        <h2 class="popup__title">Новое место</h2>
        <form class="popup__form" name="newCardPopupForm" novalidate>
          <label class="popup__field">
            <input
              type="text"
              class="popup__input popup__input_type_title"
              id="title-input"
              placeholder="Название"
              name="name"
              minlength="2"
              maxlength="30"
              required />
            <span class="popup__input-error title-input-error"></span>
          </label>
          <label class="popup__field">
            <input
              type="url"
              class="popup__input popup__input_type_link"
              id="link-input"
              placeholder="Ссылка на картинку"
              name="link"
              required />
            <span class="popup__input-error link-input-error"></span>
          </label>
          <button
            class="popup__save-button"
            type="submit">Создать</button>
        </form>
        <button
          class="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"></button>
      </div>
    </div>

    <div class="popup popup_type_image">
      <figure class="popup__image-container">
        <img
          src="#"
          alt="#"
          class="popup__image" />
        <figcaption class="popup__image-caption">#</figcaption>
        <button
          class="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"></button>
      </figure>
    </div>

    <div class="popup popup_type_confirm">
      <div class="popup__container content__element">
        <h2 class="popup__title">Вы уверены?</h2>
        <button
            class="popup__save-button"
            type="button">Да</button>
        <button
          class="popup__cancel-button"
          type="button"
          aria-label="Закрыть окно"></button>
      </div>
    </div>
  </div>


  );
}

export default App;
