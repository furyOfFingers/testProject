import React, { useState } from 'react';
import s from './Test.styl';
import { connect } from 'react-redux';
import { createTestAction } from '../../../Redux/Tests/TestsActions';
import { getAllTestsAction } from '../../../Redux/Tests/TestsActions';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';

interface ITestProps {
  /** Признак открытия блока редактирования тестов или ответов. */
  isTest?: boolean;
  /** Экшен на создание теста. */
  createTestAction: any;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
}

/** Компонент создания теста. */
const Test = ({ ...props }: ITestProps) => {
  const [testTitle, setTestTitle] = useState('');
  const [disabled, setDisabled] = useState(true);

  /** Валидирует изменения. */
  const onBlurTestValidation = () => {
    if (testTitle === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  /** Изменяет значение заголовка теста. */
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTestTitle(event.currentTarget.value);
  };

  /** Отправляет заголовок на создание теста. */
  async function handleCreateTest(){
    await props.createTestAction(testTitle);
    await props.getAllTestsAction();
  };

  return (
    <div className={s['test-container']}>
      <Label extraClass={[s['extra-label']]} text='Test Creation' />

      <div className={s['action-bar']}>
        <Input
          onBlur={onBlurTestValidation}
          onChange={handleTitleChange}
          value={testTitle}
          placeholder='Enter test title'
        />

        <Button
          disabled={disabled}
          name='edit'
          onClick={handleCreateTest}
          theme='green'
          text='create'
          size='small'
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createTestAction,
  getAllTestsAction
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
