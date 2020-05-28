import React, { useState } from 'react';
import s from './Select.styl';
import c from 'classnames';

/**
 * Свойства компонента Select.
 */
interface ISelectProps {
  /** onClick компонетна Select. */
  handleOnClick?: () => void;
  /**  */
}

/**
 * Компонент Select.
 */
const Select = ({}: ISelectProps) => {
  const [isOpenList, setOpenList] = useState(false);
  const [selection, setSelection] = useState('single');

  const handleOnClick = (item: string) => {
    setSelection(item);
  };
  const items = ['single', 'multiple', 'number'];

  // /**
  //  * Метод изменяющий значение инпутов формы.
  //  * @param {Event} event Объект инициатора события.
  //  */
  // const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormState({
  //     ...formState,
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // };

  return (
    <div className={s['custom-select-container']}>
      <span>choice question type</span>

      <div className={s['select']} onClick={() => setOpenList(!isOpenList)}>
        {selection}
      <span className={c({ [s['triangle']]: isOpenList })}></span>

        {isOpenList && (
          <div>
            {items.map((item, key) => (
              <div key={key} onClick={() => handleOnClick(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  // <div className={s['custom-select']}>
  //   <select>
  //     <option value="0">single</option>
  //     <option value="1">multiple</option>
  //     <option value="2">number</option>
  //   </select>
  // </div>
};

export default Select;
