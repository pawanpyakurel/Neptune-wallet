import React from 'react';
import styles from 'components/Modal/Modal.module.css';
import { ChildrenProps } from 'static/types/GenericTypes';

export interface ModalProps extends ChildrenProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return (
    <div className={`${styles.root} ${isOpen ? 'visible' : 'hidden'}`}>
      <div
        className={`${styles.dialog} ${
          isOpen && styles.dialog_active
        } flex column`}
      >
        <header className={styles.header}>
          <h2 className={styles.dialog_title}>Wallet Details</h2>
          <span
            className={styles.dialog_close}
            onClick={onClose}
          >
            &#x2715;
          </span>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};
