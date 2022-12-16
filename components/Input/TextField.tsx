import React, { ChangeEvent } from 'react';
import styles from 'components/Input/TextField.module.css';

interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  handleInputChange: (name: string, value: string) => void;
}

export const TextField = ({
  handleInputChange,
  name = '',
  ...rest
}: TextFieldProps) => {
  const handleChangeConversion = (event?: ChangeEvent<HTMLInputElement>) => {
    const numberWithoutComma = event?.target?.value.replace(/\,/g, '');
    handleInputChange(name, numberWithoutComma ?? '');
  };
  return (
    <div className={`${styles.input_box} flex-center`}>
      <input
        {...rest}
        onChange={handleChangeConversion}
        name={name}
        className={styles.input}
      />
      <label
        htmlFor={name}
        className={styles.label}
      >
        {name}
      </label>
    </div>
  );
};
