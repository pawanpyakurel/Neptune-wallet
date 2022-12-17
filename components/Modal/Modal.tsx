import React from 'react';
import styles from 'components/Modal/Modal.module.css';
import { ChildrenProps } from 'static/types/GenericTypes';

interface ModalProps extends ChildrenProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return (
    <div className={`${styles.root} ${isOpen ? 'visible' : 'hidden'}`}>
      <div className={`${styles.dialog} ${isOpen && styles.dialog_active}`}>
        <span
          className={styles.dialog_close}
          onClick={onClose}
        >
          &#x2715;
        </span>
        {children}
      </div>
    </div>
  );
};
