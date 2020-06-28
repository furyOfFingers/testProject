import React from 'react';
import Button from '../../../Components/Button/Button';
import s from '../EditField.styl';
import Input from '../../../Components/Input/Input';
import Label from '../../../Components/Label/Label';
import QuestionsTable from '../TableComponents/QuestionsTable';

interface IEditTestProps {
  /** Колбэк на изменение наименования теста. */
  handleTitleChange: any;
  /** Колбэк на отмену изменений. */
  handleResetChange: any;
  /** Данные редактируемого элемента */
  data: any;
  /** Колбэк на отправку редактирования заголовка теста. */
  onEdit: any;
  /** Признак открытия блока редактирования тестов. */
  isTest?: boolean;
}

/** Компонент редактирования теста. */
const EditTest = ({
  handleTitleChange,
  handleResetChange,
  data,
  onEdit,
}: IEditTestProps) => {
  return (
    <div className={s['editable-block']}>
      <Label
        extraClass={[s['extra-label']]}
        text={`Edit test at number '${data.id}'`}
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

      <QuestionsTable data={data} />
    </div>
  );
};

export default EditTest;
