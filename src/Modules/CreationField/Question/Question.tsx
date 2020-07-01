import React, { useState, useEffect } from 'react';
import s from './Question.styl';
import { connect } from 'react-redux';
import { IAppState } from '../../../Types/Types';
import { getAllTestsAction } from '../../../Redux/Tests/TestsActions';
import { createQuestionAction } from '../../../Redux/Questions/QuestionActions';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
import Select from '../../../Components/Select/Select';
import ErrorLog from '../../../Components/ErrorLog/ErrorLog';

interface IQuestionProps {
  /** Данные вопросов. */
  actualAnswers: any;
  /** Идентификатор актуального элемента. */
  dataByClick?: any;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на создание вопроса. */
  createQuestionAction: any;
  /** Колбэк на изменение типа вопроса. */
  onSelectChange: any;
}

/** Компонент создания теста. */
const Question = ({
  actualAnswers,
  onSelectChange,
  dataByClick,
  ...props
}: IQuestionProps) => {
  const [disabled, setDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const [questionForm, setQuestionForm] = useState({
    title: '',
    questionType: 'single',
    /**answer можно потом передать вместе с вариантами ответов */
    answer: null,
    testId: 0,
  });

  useEffect(() => {
    if (dataByClick.name === 'test') {
      setQuestionForm({
        ...questionForm,
        testId: dataByClick.id,
      });
    }
  }, [dataByClick]);

  /** Изменяет значение селекта. */
  const handleChange = (option: string) => {
    setQuestionForm({
      ...questionForm,
      questionType: option,
      title: '',
    });
    onSelectChange(option);
  };

  /** Валидирует изменения. */
  const onBlurTestValidation = () => {
    console.log(questionForm);
    if (questionForm.title === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  /** Изменяет значение заголовка вопроса. */
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionForm({
      ...questionForm,
      title: event.currentTarget.value,
    });
  };

  /** Отправляет заголовок на создание теста. */
  async function handleCreateTest() {
    if (dataByClick.name === 'test' && questionForm.testId !== 0) {
      await setQuestionForm({ ...questionForm, testId: dataByClick.id });
      await props.createQuestionAction(questionForm);
      await props.getAllTestsAction();
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  }

  return (
    <div className={s['test-container']}>
      <Label extraClass={[s['extra-label']]} text='Question Creation' />
      {showError && <ErrorLog text='Select a test to add a question to it' />}

      <div className={s['select']}>
        <Select head onChange={handleChange} select='single' />
      </div>

      <div className={s['action-bar']}>
        <Input
          onBlur={onBlurTestValidation}
          onChange={handleTitleChange}
          value={questionForm.title}
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
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getAllTestsAction,
  createQuestionAction,
};

const mapStateToProps = (state: IAppState) => ({
  test: state.test,
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
