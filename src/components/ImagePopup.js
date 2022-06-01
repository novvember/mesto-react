function ImagePopup() {

  return (
    <div className="popup popup_type_image">
    <figure className="popup__image-container">
      <img
        src="#"
        alt="#"
        className="popup__image" />
      <figcaption className="popup__image-caption">#</figcaption>
      <button
        className="popup__cancel-button"
        type="button"
        aria-label="Закрыть окно"></button>
    </figure>
  </div>
  );
}

export default ImagePopup;
