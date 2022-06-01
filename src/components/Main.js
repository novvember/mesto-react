function Main() {

  return (
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
  );
}

export default Main;
