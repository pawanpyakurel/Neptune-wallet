type TextEclipseCenterProps = {
  text: string;
  minLength?: number;
};

export const textEclipseCenter = ({
  text = '',
  minLength = 0,
}: TextEclipseCenterProps) => {
  const textLength = !!text && text?.length;
  if (textLength < minLength || !textLength) {
    return text;
  }
  const firstFour = !!text && text?.substring(0, 5);

  const lastFour = !!text && text?.substring(textLength - 5, textLength);

  return `${firstFour}........${lastFour}`;
};
