import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}>
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
  );
}

export default EditAvatarPopup;
