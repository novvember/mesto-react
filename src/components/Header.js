import logo from '../images/header__logo_light.svg';

function Header() {
  return (
    <header class="header content__element content__element_type_header">
    <img
      src={logo}
      alt="Сервис Место-Россия. Логотип"
      class="header__logo" />
    </header>
  );
}

export default Header;
