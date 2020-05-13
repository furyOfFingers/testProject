import React, { useState } from 'react';
import s from './Table.styl';

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
}

/**
 * Компонент Table
 */
const Table: React.FC<ITableProps> = ({ header, data }) => {

  /** Рендерит заголовок таблицы. */
  const renderTableHeader = (): any => {
    return header.map((el: any, key: number) => {
      return <th key={key}>{el}</th>;
    });
  };

  /** Рендерит тело таблицы. */
  const renderTableBode = () => {
    return data.map((el: any, key: number) => {
      return (
        <tr className={s['data-body-table']} key={key}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.timeOfCreation}</td>
        </tr>
      );
    });
  };

  return (
    <div className={s['table-container']}>
      <table>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableBode()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
