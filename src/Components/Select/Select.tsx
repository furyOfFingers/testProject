import React, { useState } from 'react';
import s from './Select.styl';
import c from 'classnames';

/**
 * Свойства компонента Select.
 */
interface ISelectProps {
  /** onChange компонетна Select. */
  onChange?: ((option: string) => void) | any;
}

/**
 * Компонент Select.
 */
const Select = ({ onChange, }: ISelectProps) => {
  const [isOpenList, setOpenList] = useState(false);
  const [selection, setSelection] = useState('single');
  const items = ['single', 'multiple', 'number'];

  /**
   * Метод изменяющий option компонента select.
   * @param {string} item option.
   */
  const handleOnClick = (item: string) => {
    setSelection(item);
    onChange(item);
  };

  return (
    <div className={s['custom-select-container']}>
      {/* <span>choice question type</span> */}

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
};

export default Select;