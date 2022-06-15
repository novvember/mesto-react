import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(event) {
    const text = event.target.value;
    setName(text);
  }

  function handleChangeDescription(event) {
    const text = event.target.value;
    setDescription(text);
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            name="name"
            id="name-input"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChangeName} />
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
            required
            onChange={handleChangeDescription} />
          <span className="popup__input-error job-input-error"></span>
        </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
