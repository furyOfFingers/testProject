import React from 'react';
import s from './Checkbox.styl';

/**
 * Свойства компонента Checkbox.
 */
interface ICheckboxProps {
  /** Флаг чекбокса. */
  checked: boolean;
  /** Текст компонетна Checkbox. */
  text: string;
  /** onChange компонетна Checkbox. */
  onChange: () => void;
  /** name компонетна Checkbox. */
  name?: string;
}

/**
 * Компонент Checkbox.
 */
const Checkbox = ({ checked, text, onChange, name }: ICheckboxProps) => {
  return (
    <label className={s['container']}>
      {text}
      <input
        name={name}
        onChange={onChange}
        type='checkbox'
        checked={checked}
      />
      <span className={s['checkmark']}></span>
    </label>
  );
};

export default Checkbox;