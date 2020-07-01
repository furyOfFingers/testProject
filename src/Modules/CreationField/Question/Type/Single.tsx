import React from 'react';
import Input from '../../../../Components/Input/Input';
import Button from '../../../../Components/Button/Button';

interface ISingleProps {
  /** Колбэк на onBlur поле ввода. */
  onBlur?: any;
  /** Колбэк на изменение поля ввода. */
  handleTitleChange: any;
  /** Значение заголовка вопроса. */
  title: any;
  /** Признак заблокированности кнопки. */
  disabled: boolean;
  /** Колбэк на создание вопроса. */
  handleCreateTest: any;
}

/** Компонент создания теста типа Single. */
const Single = ({
  onBlur,
  handleTitleChange,
  title,
  disabled,
  handleCreateTest,
}: ISingleProps) => {
  return (
    <>
      <Input
        onBlur={onBlur}
        onChange={handleTitleChange}
        value={title}
        placeholder='Enter question title'
      />

      <Button
        disabled={disabled}
        name='edit'
        onClick={handleCreateTest}
        theme='green'
        text='create'
        size='small'
      />
    </>
  );
};

export default Single;
