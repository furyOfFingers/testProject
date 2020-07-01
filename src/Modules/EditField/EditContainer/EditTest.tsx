import React, { useState } from 'react';
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
}

/** Компонент редактирования теста. */
const EditTest = ({
  handleTitleChange,
  handleResetChange,
  data,
  onEdit,
}: IEditTestProps) => {
  const [disable, setDisable] = useState(false);

  /** Валидирует изменения. */
  const onBlurTestValidation = () => {
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
        text={`Edit test at number '${data.id}'`}
      />

      <Input
        onBlur={onBlurTestValidation}
        onChange={(event) => handleTitleChange(event)}
        value={data.title || ''}
        placeholder='Enter test option'
      />

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

      <QuestionsTable data={data} />
    </div>
  );
};

export default EditTest;
