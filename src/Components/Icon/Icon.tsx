import * as icons from './icons';

import React from 'react';
import c from 'classnames';
import s from './Icon.styl';

/**
 * Свойства компонента Icon.
 */

interface IIcon {
  /** Наименование Icon */
  name: string;
  /** Дополнительный стиль Icon */
  extraClass?: (string | object)[];
  /** Дополнительный цвет svg */
  color?: 'white' | 'black' | 'gray' | 'light-gray' | 'blue' | 'red';
  width?: string;
  height?: string;
}

/**
 * Компонент Icon.
 */
const Icon = ({
  name,
  extraClass = [],
  color = 'black',
  width,
  height,
}: IIcon): JSX.Element => {
  let style: { width?: string; height?: string } = {};
  if (width) style.width = width;
  if (height) style.height = height;
  return (
    <div
      component-type='icon'
      className={c(s['Icon__wrapper'], s[color], ...extraClass)}
      style={style}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
};

export default Icon;
