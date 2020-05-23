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
  /** Параметр принимающий стиль кнопки. */
  extra?: any;
  /** Тема Button */
  theme?: 'info' | 'green' | 'red' | 'default';
}

/**
 * Компонент Button.
 */
const Button = ({
  text,
  onClick,
  disabled,
  extra,
  theme = 'default',
}: IButtonProps) => {
  const style = c(
    s['button-style'],
    s[`theme__${theme}`],
    s[`extra_${extra}`],
    { [s['disabled']]: disabled }
  );

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {text}
    </button>
  );
};

export default Button;
