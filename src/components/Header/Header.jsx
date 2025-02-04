import  { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import ukraineFlag from "../../assets/ukraine.svg";
import loginIcon from "../../assets/log-in-01.svg";
import Modal from "../Modal/Modal";
import RegisterForm from "../Register/Register";
import LoginForm from "../Login/Login";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <>
      <header className={`${css.header} container`}>
        <nav className={css.header__nav}>
          <Link to="/" className={css.header__logo}>
            <img src={ukraineFlag} alt="ukraine flag" width="28px" />
            <p className={css.header__logo_text}>TeachPortfolio</p>
          </Link>
          <ul className={css.header__pages}>
            <li className={css.header__item}>
              <Link to="/" className={css.header__link}>
                Home
              </Link>
            </li>
            <li className={css.header__item}>
              <Link to="/teachers" className={css.header__link}>
                Teachers
              </Link>
            </li>
          </ul>
          <div className={css.header__buttons}>
            <button
              className={`${css.header__login} button`}
              onClick={openLoginModal}>
              <img src={loginIcon} alt="" />
              Log in
            </button>
            <button
              className={`${css.header__registration} button`}
              onClick={openRegisterModal}>
              Registration
            </button>
          </div>
        </nav>
      </header>
      <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
        <RegisterForm onClose={closeRegisterModal} />
      </Modal>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm onClose={closeLoginModal} />
      </Modal>
    </>
  );
};

export default Header;
