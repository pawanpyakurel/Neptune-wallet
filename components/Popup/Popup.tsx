import { Button } from 'components/Button/Button';
import { Modal, ModalProps } from 'components/Modal/Modal';
import React from 'react';
import styles from 'components/Popup/Popup.module.css';

interface PopUpProps extends ModalProps {
  onOkClick?: () => void;
}

export const PopUp = ({
  children,
  onClose,
  onOkClick,
  ...rest
}: PopUpProps) => (
  <Modal
    onClose={onClose}
    {...rest}
  >
    {children}
    <div className={`${styles.action_container} flex gap-1`}>
      <Button
        color='primary'
        onClick={onOkClick}
      >
        Connect
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  </Modal>
);
