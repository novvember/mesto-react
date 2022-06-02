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
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="content">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />

      <Footer />

      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <label className="popup__field">
            <input
              type="url"
              className="popup__input popup__input_type_link"
              id="avatar-link-input"
              placeholder="Ссылка на картинку"
              name="link"
              required />
            <span className="popup__input-error avatar-link-input-error"></span>
          </label>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              name="name"
              id="name-input"
              minLength="2"
              maxLength="40"
              required />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_job"
              id="job-input"
              placeholder="Профессия"
              name="job"
              minLength="2"
              maxLength="200"
              required />
            <span className="popup__input-error job-input-error"></span>
          </label>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_title"
              id="title-input"
              placeholder="Название"
              name="name"
              minLength="2"
              maxLength="30"
              required />
            <span className="popup__input-error title-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              className="popup__input popup__input_type_link"
              id="link-input"
              placeholder="Ссылка на картинку"
              name="link"
              required />
            <span className="popup__input-error link-input-error"></span>
          </label>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        onClose={closeAllPopups}
        />

      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
        />

    </div>
  );
}

export default App;
