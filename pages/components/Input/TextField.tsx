import React, { ChangeEvent } from 'react';

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
    <div>
      <input
        {...rest}
        onChange={handleChangeConversion}
        name={name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};
