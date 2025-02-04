import css from "./Modal.module.css";
import { useEffect } from "react";
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Очистити подію при розмонтуванні
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  
  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={css.modal_overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modal_close} onClick={onClose}>
          &times;
        </button>
        <div className={css.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
