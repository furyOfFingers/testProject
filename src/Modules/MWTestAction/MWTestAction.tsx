import React from 'react';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import s from './MWTestAction.styl';
import {
  deleteTestAction,
  getAllTestsAction,
} from '../../Redux/Tests/TestsActions';
import {deleteAnswerAction} from '../../Redux/Answers/AnswerActions';
import { deleteQuestionAction } from '../../Redux/Questions/QuestionActions';
import { openEditFieldAction, openEditAnswerAction } from '../../Redux/TestsAndQuestions/TestsAndQuestionsActions';
import Label from '../../Components/Label/Label';

interface IMWTestActionProps {
  /** Колбэк на закрытие. */
  handleCloseMW: () => void;
  /** Данные теста или вопроса переданные на обработку. */
  data: any;
  /** Признак открытия блока редактирования тестов. */
  isTest?: boolean;
  /** Признак открытия блока редактирования вопросов. */
  isQuestion?: boolean;
  /** Признак открытия блока редактирования ответов. */
  isAnswer?: boolean;
  /** Вид модального окна. */
  action: 'edit' | 'remove';
  /** Экшен на удаление теста. */
  deleteTestAction: any;
  /** получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на изменение признака открытия окна редактирования. */
  openEditFieldAction: any;
  /** Экшен на передачу данных при редактировании ответов. */
  openEditAnswerAction: any;
  /** Экшен на удаление вопроса. */
  deleteQuestionAction: any;
  /** Колбэк на отображение блока редактирование ответов. */
  onEditClick: any;
  /** Экшен на удаление ответа. */
  deleteAnswerAction: any;

}

const MWTestAction = ({
  action,
  data,
  isTest,
  isQuestion,
  isAnswer,
  onEditClick,
  handleCloseMW,
  ...props
}: IMWTestActionProps) => {
  /** Удаление элемента. */
  async function handleRemove() {
    if(isAnswer) {
      await props.deleteAnswerAction(data.id);
    } else {
      isTest
      ? await props.deleteTestAction(data.id)
      : await props.deleteQuestionAction(data.id);
      await handleCloseMW();
    }
    await props.getAllTestsAction();
  }

  /** Редактирование элемента. */
  async function handleEdit() {
    if(isAnswer) {
      await onEditClick && onEditClick(data.id)
    }
    else {
      await props.openEditFieldAction(data, isTest, isQuestion);
    }
    await handleCloseMW();
  }

  const MWText = action === 'edit' ? 'Edit' : 'Remove';
  const MWFunction = action === 'edit' ? handleEdit : handleRemove;

  return (
    <div className={s['m-w-remove']}>
      <Label extraClass={[s['extra-label']]} text={MWText} />

      <span className={s['text']}>
        {MWText} element "{data.id}" ?
      </span>

      <div className={s['btns-block']}>
        <Button theme='green' onClick={MWFunction} text={MWText} />

        <Button theme='red' onClick={handleCloseMW} text='Cancel' />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTestAction,
  getAllTestsAction,
  openEditFieldAction,
  deleteQuestionAction,
  openEditAnswerAction,
  deleteAnswerAction
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MWTestAction);
