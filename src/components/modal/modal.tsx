import {FC, ReactNode, useEffect} from 'react';
import styles from './modal.module.css';

import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from "react-dom";

const modalRoot: HTMLElement = document.getElementById("react-modals") as HTMLElement;

type TModalProps = {
  onClose: () => void;
  children: ReactNode
}

const Modal: FC<TModalProps> = ({ onClose, children }) => {

  useEffect(() => {
    document.addEventListener('keydown', handleEscButton)

    return () => {
      document.removeEventListener('keydown', handleEscButton)
    }
  }, [])

  function handleEscButton (evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  return ReactDOM.createPortal(
    (
      <>
        <div className={styles.modalWrapper} >
          <ModalOverlay closeModal={onClose}/>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose} >
              X
            </button>
            {children}
            <hr />
          </div>
        </div>
      </>
    ), modalRoot
  );
}

export default Modal;
