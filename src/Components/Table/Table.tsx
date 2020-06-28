import React, { useState } from 'react';
import s from './Table.styl';
import { IAppState } from '../../Types/Types';
import { connect } from 'react-redux';

/**
 * Свойства компонента Table.
 */
interface ITableProps {
  /** Отображаемые данные компонента Table. */
  data: any;
  /** Коллбэк на клик по строке. */
  onClick?: () => void;
  /** Заголовок компонента Table. */
  header: any;
  /** Признак наличия прав администратора. */
  isAdmin: boolean;
  /** Тело компонента Table */
  body: any;
}

/**
 * Компонент Table
 */
const Table: React.FC<ITableProps> = ({ header, data, body, ...props }) => {
  //todo разобраться с классами и сортировкой элементов.

  /** Рендерит заголовок таблицы. */
  const renderTableHeader = (): any => {
    props.isAdmin && header.push('Action');
    return header.map((el: any, key: number) => {
      return <th key={key}>{el}</th>;
    });
  };

  return (
    <div className={s['table-container']}>
      <table>
        <tbody>
          <tr className={s['table-container-header']}>{renderTableHeader()}</tr>
          {body()}
        </tbody>
      </table>
    </div>
  );
};

// export default Table;
const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
