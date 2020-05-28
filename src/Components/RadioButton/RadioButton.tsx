import React from 'react';
import s from './RadioButton.styl';

/**
 * Свойства компонента RadioButton.
 */
export interface IRadioButtonProps {
  /** Флаг radio button. */
  checked?: boolean;
  /** onchange компонента input. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Компонент RadioButton.
 */
const RadioButton = ({ checked, onChange }: IRadioButtonProps) => {
  return (
    <label className={s['radio-button-container']}>
      <input type='radio' name='radio' checked={checked} onChange={onChange} />
      <span className={s['checkmark']}></span>
    </label>
  );
};

export default RadioButton;
