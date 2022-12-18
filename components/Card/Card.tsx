import React from 'react';
import styles from 'components/Card/Card.module.css';
import { ChildrenProps } from 'static/types/GenericTypes';

interface CardProps extends ChildrenProps {
  title?: string;
}

export const Card = ({ children, title }: CardProps) => (
  <div className={`${styles.card} flex-center column`}>
    <h2 className='text-center mt-0 padding'>{title}</h2>
    {children}
  </div>
);
