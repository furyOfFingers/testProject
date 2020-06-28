import React from 'react';
import s from './Button.styl';
import c from 'classnames';

import Icon from '../Icon/Icon';

/**
 * Свойства компонента Button.
 */
interface IButtonProps {
  /** Текст кнопки. */
  text?: string;
  /** Метод onClick кнопки. */
  onClick: (event: React.MouseEvent) => void;
  /** свойство disabled кнопки. */
  disabled?: boolean;
  /** Тема Button */
  theme?: 'info' | 'green' | 'red' | 'default';
  /** Тип Button */
  type?: 'icon' | 'text';
  /** Тип кнопки. */
  size?: 'small' | 'middle';
  /** name кнопки. */
  name?: string;
  /** Имя иконки. */
  iconName?: string;
  /** Цвет иконки. */
  iconColor?: 'white' | 'black' | 'gray' | 'light-gray' | 'blue' | 'red';
  /** Width кнопки. */
  iconWidth?: string;
  /** Height кнопки. */
  iconHeight?: string;
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
  iconName = '',
  iconColor,
  iconWidth,
  iconHeight,
  type = 'text',
  extraClass = [],
}: IButtonProps) => {
  const style = c(
    s['button-style'],
    s[`theme__${theme}`],
    s[`type__${type}`],
    s[`size__${size}`],
    { [s['disabled']]: disabled },
    ...extraClass
  );

  return (
    <button name={name} onClick={onClick} disabled={disabled} className={style}>
      {text}
      {type === 'icon' &&
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      }
    </button>
  );
};

export default Button;
