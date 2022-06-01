import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }



  return (
    <div class="content">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        />
      <Footer />

      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={(
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
        )}
        />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
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
          </>
        )}
        />

      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
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
          </>
        )}
        />

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        onClose={closeAllPopups}
        />
      <ImagePopup />
    </div>
  );
}

export default App;
