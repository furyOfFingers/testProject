import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import s from './EditField.styl';
import { IAppState } from '../../Types/Types';
import { IQuestionProps } from '../../Types/Types';
import EditTest from './EditContainer/EditTest';
import EditQuestion from './EditContainer/EditQuestion';
import {
  editTestAction,
  getAllTestsAction,
} from '../../Redux/Tests/TestsActions';
import { editQuestionAction } from '../../Redux/Questions/QuestionActions';

interface IEditFieldProps {
  /** Признак открытия блока редактирования тестов или ответов. */
  isTest?: boolean;
  /** Признак открытия блока редактирования вопросов. */
  isQuestion?: boolean;
  /** Редактируемые данные. */
  editData: IQuestionProps;
  /** Экшен на редактирование теста */
  editTestAction: any;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на редактирование вопроса. */
  editQuestionAction: any;
}

/** Компонент редактирования элементов. */
const EditField = ({ ...props }: IEditFieldProps) => {
  const [data, setData] = useState<IQuestionProps | any>({});

  useEffect(() => {
    setData(props.editData);
  }, [props.editData]);

  /** Изменяет значение типа вопроса. */
  const handleChange = (option: string) => {
    setData({ ...data, question_type: option });
  };

  /** Изменяет значение заголовка теста. */
  const handleTitleChange = (event: any) => {
    setData({ ...data, title: event.currentTarget.value });
  };

  /** Редактирует вопросы тестов. */
  async function onQuestionEdit() {
    const editQuestion = {
      title: data.title,
      questionType: data.question_type,
      // answer: data.answer,
      // answers: data.answers,
      questionId: data.id,
    };
    await props.editQuestionAction(editQuestion);
    await props.getAllTestsAction();
  }

  /** Редактирует тесты. */
  async function onTestEdit() {
    const editTest = {
      id: data.id,
      title: data.title,
    };
    await props.editTestAction(editTest);
    await props.getAllTestsAction();
  }

  const handleResetChange = () => {
    setData({ ...props.editData });
  };

  /** Рендерит блок редактирования тестов */
  const renderTestEditBody = () => {
    return (
      <EditTest
        data={data}
        handleTitleChange={handleTitleChange}
        handleResetChange={handleResetChange}
        onEdit={onTestEdit}
      />
    );
  };

  /** Рендерит блок редактирования тестов */
  const renderQuestionEditBody = () => {
    return (
      <EditQuestion
        data={data}
        handleTitleChange={handleTitleChange}
        handleResetChange={handleResetChange}
        onEdit={onQuestionEdit}
        handleSelectChange={handleChange}
      />
    );
  };

  return (
    <div className={s['edit-field-container']}>
      {props.isTest && renderTestEditBody()}
      {props.isQuestion && renderQuestionEditBody()}
    </div>
  );
};

const mapDispatchToProps = {
  editTestAction,
  getAllTestsAction,
  editQuestionAction,
};

const mapStateToProps = (state: IAppState) => ({
  isTest: state.testsAndQuestions.isTest,
  isQuestion: state.testsAndQuestions.isQuestion,
  editData: state.testsAndQuestions.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditField);
