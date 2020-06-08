import React from 'react';
import s from './Button.styl';
import c from 'classnames';

/**
 * Свойства компонента Button.
 */
interface IButtonProps {
  /** Текст кнопки. */
  text: string;
  /** Метод onClick кнопки. */
  onClick: (event: React.MouseEvent) => void;
  /** свойство disabled кнопки. */
  disabled?: boolean;
  /** Тема Button */
  theme?: 'info' | 'green' | 'red' | 'default';
  /** Тип кнопки. */
  size?: 'small' | 'middle'
  /** name компонента input. */
  name?: string;
  /** Дополнительный стиль Input. */
  extraClass?: (string | object)[];
}

/**
 * Компонент Button.
 */
const Button = ({
  text,
  onClick,
  disabled,
  theme = 'default',
  size = 'middle',
  name,
  extraClass = []
}: IButtonProps) => {
  const style = c(
    s['button-style'],
    s[`theme__${theme}`],
    s[`size__${size}`],
    { [s['disabled']]: disabled },
    ...extraClass
  );

  return (
    <button name={name} onClick={onClick} disabled={disabled} className={style}>
      {text}
    </button>
  );
};

export default Button;
