import React from 'react';
import s from './Label.styl';
import c from 'classnames';

/**
 * Свойства компонента Label.
 */
interface ISelectProps {
  /** Текст компонетна Label. */
  text: string;
  /** Дополнительный стиль Label. */
  extraClass?: (string | object)[];
}

/**
 * Компонент Label.
 */
const Label = ({ extraClass = [], text }: ISelectProps) => {
  const style = c(s['span-label'], ...extraClass);

  return <span className={style}>{text}</span>;
};

export default Label;
