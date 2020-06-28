import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import s from './EditField.styl';
import { IAppState } from '../../Types/Types';
import { IQuestionProps } from '../../Types/Types';
import TestEditContainer from './EditContainer/TestEditContainer';
import QuestionEditContainer from './EditContainer/QuestionEditContainer';
import {
  editTestAction,
  getAllTestsAction,
} from '../../Redux/Tests/TestsActions';
import { editQuestionAction } from '../../Redux/Questions/QuestionActions';

interface IEditFieldProps {
  /** Признак редактирования теста или вопроса. */
  isTest: boolean;
  /** Признак открытия блока редактирования ответов. */
  isAnswer: boolean;
  /** Редактируемые данные. */
  editData: IQuestionProps;
  /** Признак открытия блока редактирования. */
  isOpenEditField: boolean;
  /** Экшен на редактирование теста */
  editTestAction: any;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на редактирование вопроса. */
  editQuestionAction: any;
}

const EditField = ({ ...props }: IEditFieldProps) => {
  const [data, setData] = useState<IQuestionProps | any>({});

  useEffect(() => {
    setData(props.editData);
    console.log(props.editData, 'props.editData');
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
    setData({ ...data, title: props.editData.title });
  };

  const renderEditBody = () => {
    if (props.isTest) {
      return (
        <TestEditContainer
          data={data}
          isTest={props.isTest}
          handleTitleChange={handleTitleChange}
          handleResetChange={handleResetChange}
          onEdit={onTestEdit}
        />
      );
    } else {
      return (
        <QuestionEditContainer
          data={data}
          isTest={props.isTest}
          handleTitleChange={handleTitleChange}
          handleResetChange={handleResetChange}
          onEdit={onQuestionEdit}
          handleSelectChange={handleChange}
        />
      );
    }
  };

  return (
    <div className={s['edit-field-container']}>
      {props.isOpenEditField && renderEditBody()}
      {props.isAnswer && <span>answer</span>}
    </div>
  );
};

const mapDispatchToProps = {
  editTestAction,
  getAllTestsAction,
  editQuestionAction,
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
  isOpenEditField: state.testsAndQuestions.isOpen,
  isTest: state.testsAndQuestions.isTest,
  isAnswer: state.testsAndQuestions.isAnswerOpen,
  editData: state.testsAndQuestions.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditField);
