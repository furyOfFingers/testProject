import React from 'react';
import { IAppState } from '../../Types/Types';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import s from './MWTestAction.styl';
import {
  editTestAction,
  deleteTestAction,
  getAllTestsAction,
} from '../../Redux/Tests/TestsActions';
import { deleteQuestionAction } from '../../Redux/Questions/QuestionActions';
import { openEditFieldAction } from '../../Redux/TestsAndQuestions/TestsAndQuestionsActions';
import Label from '../../Components/Label/Label';

interface IMWTestActionProps {
  /** Колбэк на закрытие. */
  handleCloseMW: () => void;
  /** Данные теста или вопроса переданные на обработку. */
  data: any;
  /** Признак редактирования теста или вопроса. */
  isTest?: boolean;
  /** Признак открытия блока редактирования ответов. */
  isAnswerOpen?: boolean;
  /** Вид модального окна. */
  action: 'edit' | 'remove';
  /** Экшен на удаление теста. */
  deleteTestAction: any;
  /** получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на изменение признака открытия окна редактирования. */
  openEditFieldAction: any;
  /** Экшен на удаление вопроса. */
  deleteQuestionAction: any;
}

const MWTestAction = ({
  action,
  data,
  isTest,
  handleCloseMW,
  isAnswerOpen,
  ...props
}: IMWTestActionProps) => {
  /** Удаление элемента. */
  async function handleRemove() {
    isTest
      ? await props.deleteTestAction(data.id)
      : await props.deleteQuestionAction(data.id);
    await handleCloseMW();
    await props.getAllTestsAction();
  }

  /** Редактирование элемента. */
  async function handleEdit() {
    await props.openEditFieldAction(data, true, isTest, isAnswerOpen);
    // await props.editTestAction(data.id);
    await handleCloseMW();
    // await props.getAllTestsAction();
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
  editTestAction,
  openEditFieldAction,
  deleteQuestionAction,
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
  test: state.test,
});

export default connect(mapStateToProps, mapDispatchToProps)(MWTestAction);
