import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../../Components/Button/Button';
import s from '../EditField.styl';
import Input from '../../../Components/Input/Input';
import Label from '../../../Components/Label/Label';
import Checkbox from '../../../Components/Checkbox/Checkbox';
import { editAnswerAction } from '../../../Redux/Answers/AnswerActions';
import {getAllTestsAction} from '../../../Redux/Tests/TestsActions';

interface IAnswerEditContainerProps {
  /** Данные редактируемого элемента */
  editData: any;
  /** Экшен на редактирование ответа. */
  editAnswerAction: any;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
}

/** Компонент редактирования ответа. */
const AnswerEditContainer = ({
  editData,
  ...props
}: IAnswerEditContainerProps) => {
  const [data, setData] = useState<any | any>({});
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setData(editData);
  }, [editData]);

  /** Изменяет значение заголовка теста. */
  const handleTitleChange = (event: any) => {
    setData({ ...data, text: event.currentTarget.value });
  };

  /** Сбрасывает изменения ответа. */
  const handleResetChange = () => {
    setData({ ...editData });
  };

  /** Валидирует изменения. */
  const onBlurAnswerValidation = () => {
    if (data.text === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  /** Редактирует тесты. */
  const onEdit = () => {
    props.editAnswerAction(data);
    props.getAllTestsAction();
  }

  /** Изменяет значение верности ответа. */
  const radioBtnChange = () => {
    setData({
      ...data,
      is_right: !data.is_right,
    });
  };

  return (
    <div className={s['editable-block']}>
      <Label
        extraClass={[s['extra-label']]}
        text={`Edit answer at number '${data.id}'`}
      />

      <Input
        onBlur={onBlurAnswerValidation}
        onChange={(event) => handleTitleChange(event)}
        value={data.text || ''}
        name='testEdit'
        placeholder='Enter answer option'
      />

      <Checkbox
        onChange={radioBtnChange}
        checked={data.is_right || false}
        text='Is this rigth answer?'
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
    </div>
  );
};

const mapDispatchToProps = {
  editAnswerAction,
  getAllTestsAction
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerEditContainer);
