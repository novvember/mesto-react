import Header from "./Header";
import Main from "./Main";

function App() {
  return (

    <div class="content">
      <Header />
      <Main />





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
