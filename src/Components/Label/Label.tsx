import React from 'react';
import s from './Label.styl';

/**
 * Свойства компонента Label.
 */
interface ISelectProps {
  /** Текст компонетна Label. */
  text: string;
}

/**
 * Компонент Label.
 */
const Label = ({ text }: ISelectProps) => {
  return (
    <span className={s['span-label']}>
      {text}
    </span>
  );
};

export default Label;