import React from 'react';
import s from './RadioButton.styl';
import c from 'classnames';

/**
 * Свойства компонента RadioButton.
 */
export interface IRadioButtonProps {
  /** Флаг radio button. */
  checked?: boolean;
  /** onchange компонента input. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Дополнительный стиль RadioButton. */
  extraClass?: (string | object)[];
}

/**
 * Компонент RadioButton.
 */
const RadioButton = ({ extraClass = [], checked, onChange }: IRadioButtonProps) => {
  return (
    <label className={c(s['radio-button-container'], ...extraClass)}>
      <input type='radio' name='radio' checked={checked} onChange={onChange} />
      <span className={s['checkmark']}></span>
    </label>
  );
};

export default RadioButton;
