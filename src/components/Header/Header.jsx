
import css from "./Header.module.css";
import ukraineFlag from "../../assets/ukraine.svg";
import loginIcon from "../../assets/log-in-01.svg";

const Header = () => {
  return (
    <>
      <header className={`${css.header} container`}>
        <nav className={css.header__nav}>
          <a href="#" className={css.header__logo}>
            <img src={ukraineFlag} alt="ukraine flag" width="28px" />
            <p className={css.header__logo_text}>TeachPortfolio</p>
          </a>
          <ul className={css.header__pages}>
            <li className={css.header__item}>
              <a href="#" className={css.header__link}>
                Home
              </a>
            </li>
            <li className={css.header__item}>
              <a href="#" className={css.header__link}>
                Teachers
              </a>
            </li>
          </ul>
          <div className={css.header__buttons}>
            <button className={`${css.header__login} button`}>
              <img src={loginIcon} alt="" />
              Log in
            </button>
            <button className={`${css.header__registration} button`}>
              Registration
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
