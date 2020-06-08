import React from 'react';
import c from 'classnames';

import s from './Input.styl';

/**
 * Свойства компонента Input.
 */
export interface IInputProps {
  /** disabled компонента input. */
  disabled?: boolean;
  /** placeholder компонента input. */
  placeholder?: string;
  /** onchange компонента input. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** error компонента input. */
  error?: boolean;
  /** Подсказка к компоненту input. */
  hint?: string;
  /** name компонента input. */
  name?: string;
  /** value компонента input. */
  value?: any;
  /** Признак отоюражения подсказки. */
  showHint?: boolean;
  /** Тип компонента input. */
  type?: string;
  /** onBlur компонента input. */
  onBlur?: () => void;
  /** Дополнительный стиль Input. */
  extraClass?: (string | object)[];
}

/**
 * Компонент Input.
 */
const Input = ({
  placeholder,
  disabled,
  onChange,
  error,
  hint,
  name,
  value,
  showHint,
  type = 'text',
  onBlur,
  extraClass = [],
}: IInputProps) => {

  const style = c(s['input-container'], { [s['error']]: error }, ...extraClass);

  return (
    <div className={style}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        onBlur={onBlur}
      />
      {showHint && <p>{hint}</p>}
    </div>
  );
};

export default Input;
