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
  onClick: () => void;
  /** свойство disabled кнопки. */
  disabled?: boolean;
  /** Тема Button */
  theme?: 'info' | 'green' | 'red' | 'default';
  /** Тип кнопки. */
  type?: 'icon' | 'text'
}

/**
 * Компонент Button.
 */
const Button = ({
  text,
  onClick,
  disabled,
  theme = 'default',
  type = 'text'
}: IButtonProps) => {
  const style = c(
    s['button-style'],
    s[`theme__${theme}`],
    s[`type__${type}`],
    { [s['disabled']]: disabled }
  );

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {text}
    </button>
  );
};

export default Button;
