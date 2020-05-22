import React from 'react';
import s from './Checkbox.styl';
// import { connect } from 'react-redux';
// import { checkboxAction } from './Actions';
// import {IAppState} from "Types/Types";

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

// const mapDispatchToProps = {checkboxAction};

// const mapStateToProps = (state: IAppState) => ({
//   checked: state.checkbox.checked
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
export default Checkbox;
