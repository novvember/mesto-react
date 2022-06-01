function ImagePopup(props) {

  return (
    <div className={`popup popup_type_image`  + (props.isOpen && ' popup_opened')}>
    <figure className="popup__image-container">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="popup__image" />
      <figcaption className="popup__image-caption">{props.card.name}</figcaption>
      <button
        className="popup__cancel-button"
        type="button"
        aria-label="Закрыть окно"
        onClick={props.onClose}></button>
    </figure>
  </div>
  );
}

export default ImagePopup;
