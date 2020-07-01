import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import s from '../EditField.styl';
import Input from '../../../Components/Input/Input';
import Label from '../../../Components/Label/Label';
import Select from '../../../Components/Select/Select';
import AnswersTable from '../TableComponents/AnswersTable';

interface IEditQuestionProps {
  /** Колбэк на изменение наименования теста. */
  handleTitleChange: any;
  /** Колбэк на отмену изменений. */
  handleResetChange: any;
  /** Данные редактируемого элемента */
  data: any;
  /** Колбэк на отправку редактирования заголовка теста. */
  onEdit: any;
  /** Колбэк на изменение значения селекта. */
  handleSelectChange: any;
}

/** Компонент редактирования вопроса. */
const EditQuestion = ({
  handleTitleChange,
  handleResetChange,
  data,
  onEdit,
  handleSelectChange,
}: IEditQuestionProps) => {
  const [disable, setDisable] = useState(false);

  /** Валидирует изменения. */
  const onBlurQuestionValidation = () => {
    if (data.title === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  return (
    <div className={s['editable-block']}>
      <Label
        extraClass={[s['extra-label']]}
        text={`Edit question at number '${data.id}'`}
      />

      <Input
        onBlur={onBlurQuestionValidation}
        onChange={(event) => handleTitleChange(event)}
        value={data.title || ''}
        placeholder='Enter question option'
      />

      <Select head onChange={handleSelectChange} select={data.question_type} />

      <div className={s['btns-block']}>
        <Button
          onClick={handleResetChange}
          text='cancel'
          size='small'
          theme='red'
        />

        <Button
          disabled={disable}
          onClick={onEdit}
          text='save changes'
          size='small'
          theme='green'
        />
      </div>

      <AnswersTable data={data} />
    </div>
  );
};

export default EditQuestion;
