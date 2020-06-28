import React from 'react';
import Button from '../../../Components/Button/Button';
import s from '../EditField.styl';
import Input from '../../../Components/Input/Input';
import Label from '../../../Components/Label/Label';
// import { renderAnswerEditBody } from './EditableTestQuestionsTableBody';
// import { renderQuestionEditBody } from './EditableQuestionsTableBody';

interface IAnswerEditContainerProps {
  /** Колбэк на изменение наименования теста. */
  handleTitleChange: any;
  /** Колбэк на отмену изменений. */
  handleResetChange: any;
  /** Данные редактируемого элемента */
  data: any;
  /** Колбэк на отправку редактирования заголовка теста. */
  onEdit: any;
  // /** Признак редактирования теста или вопроса. */
  // isTest: any;
}

const AnswerEditContainer = ({
  handleTitleChange,
  handleResetChange,
  data,
  onEdit,
  // isTest,
}: IAnswerEditContainerProps) => {
  return (
    <div className={s['editable-block']}>
      <Label
        extraClass={[s['extra-label']]}
        text={`Edit answer at number '${data.id}'`}
      />
      <Input
        // onBlur={() => onBlurAnswerValidation(i)}
        onChange={(event) => handleTitleChange(event)}
        value={data.title || ''}
        name='testEdit'
        // placeholder='Enter answer option'
        // error={answers[i].isEmptyOption}
        // showHint={answers[i].isEmptyOption}
        // hint='Enter answer option'
      />
      <div className={s['btns-block']}>
        <Button
          onClick={handleResetChange}
          text='cancel'
          size='small'
          theme='red'
        />

        <Button
          onClick={onEdit}
          text='save changes'
          size='small'
          theme='green'
        />
      </div>
      {/* {renderAnswerEditBody(data)} */}
    </div>
  );
};

export default AnswerEditContainer;
