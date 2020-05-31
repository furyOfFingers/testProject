import React from 'react';
import s from './RadioButton.styl';
import c from 'classnames';

/**
 * Свойства компонента RadioButton.
 */
export interface IRadioButtonProps {
  /** Флаг radio RadioButton. */
  checked?: boolean;
  /** onchange компонента RadioButton. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Дополнительный стиль RadioButton. */
  extraClass?: (string | object)[];
  /** id компонента RadioButton */
  id?: string;
}

/**
 * Компонент RadioButton.
 */
const RadioButton = ({
  id,
  checked,
  onChange,
  extraClass = [],
}: IRadioButtonProps) => {
  return (
    <label id={id} className={c(s['radio-button-container'], ...extraClass)}>
      <input type='radio' name='radio' checked={checked} onChange={onChange} />
      <span className={s['checkmark']}></span>
    </label>
  );
};

export default RadioButton;
