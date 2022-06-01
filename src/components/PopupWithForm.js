function PopupWithForm(props) {


  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container content__element">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              name="name"
              id="name-input"
              minlength="2"
              maxlength="40"
              required />
            <span className="popup__input-error name-input-error"></span>
          </label>

          <label className="popup__field">
            <input
              type="text"
              class="popup__input popup__input_type_job"
              id="job-input"
              placeholder="Профессия"
              name="job"
              minlength="2"
              maxlength="200"
              required />
            <span className="popup__input-error job-input-error"></span>
          </label>

          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
        <button className="popup__cancel-button" type="button" aria-label="Закрыть окно"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
