import React from 'react';
import { ChildrenProps } from 'static/types/GenericTypes';
import styles from 'components/Button/Button.module.css';

type ButtonVariant = 'primary' | 'basic' | 'danger';
interface ButtonProps extends ChildrenProps {
  color?: ButtonVariant;
  onClick?: () => void;
}

export const Button = ({ color = 'basic', children, ...rest }: ButtonProps) => {
  const btnClassName = `button-${color}`;
  return (
    <button
      className={`${styles.button} flex-1 ${styles[btnClassName]}`}
      {...rest}
    >
      {children}
    </button>
  );
};
