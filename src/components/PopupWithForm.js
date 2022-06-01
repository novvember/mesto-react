function PopupWithForm(props) {


  return (
    <div className={`popup popup_type_${props.name}` + (props.isOpen && ' popup_opened')}>
      <div className="popup__container content__element">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
          {props.children}
          <button className="popup__save-button" type="submit">{props.buttonText}</button>
        </form>
        <button className="popup__cancel-button" type="button" aria-label="Закрыть окно"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
