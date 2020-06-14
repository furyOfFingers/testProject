import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './AnswerCreator.styl';
import RadioButton from '../../../Components/RadioButton/RadioButton';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import { IAnswerProps } from '../../../Types/Types';
import {
  createAnswerAction,
  editAnswerAction,
  deleteAnswerAction,
} from '../../../Redux/Answers/AnswerActions';
import Label from '../../../Components/Label/Label';
// import ErrorLog from "../../../Components/ErrorLog/ErrorLog";

interface IQuestionAdderProps {
  /** onChange компонетна QuestionAdder. */
  onChange?: ((option: string) => void) | any;
  /**  */
  createAnswerAction?: any;
  /**  */
  editAnswerAction?: any;
  /**  */
  deleteAnswerAction?: any;
}
/**
 * Компонент QuestionAdder.
 */
const AnswerCreator = ({ onChange, ...props }: IQuestionAdderProps) => {
  const newAnswer: IAnswerProps = {
    isAnswer: false,
    versionAnswer: '',
    isEdit: false,
    isEmptyOption: false,
    questionId: 342
  };

  const [answers, setAnswer] = useState([{ ...newAnswer } as IAnswerProps]);
  // const [errorText, setErrorText] = useState('');
  const [disabled, setDisabled] = useState(false);

  /** Изменяет значение поля Input. */
  const handleChangeAnswer = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const updatedAnswers = [...answers];
    updatedAnswers[i].versionAnswer = event.target.value;
    setAnswer(updatedAnswers);
  };

  /** Проверяет новый ответ на пустую строку. */
  const onBlurAnswerValidation = (i: number) => {
    const updatedAnswers = [...answers];
    if (answers[i].versionAnswer == '') {
      updatedAnswers[i].isEmptyOption = true;
      setDisabled(true);
    } else {
      updatedAnswers[i].isEmptyOption = false;
      setDisabled(false);
    }
    setAnswer(updatedAnswers);
  };

  /** Изменяет значение поля RadioButton. */
  const handleChangeRadioButton = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    answers.map((el) => (el.isAnswer = false));
    const updatedAnswers = [...answers];
    updatedAnswers[i].isAnswer = event.currentTarget.checked;
    setAnswer(updatedAnswers);
    onChange(answers);
  };

  /** Добавляет варианта ответа. */
  const handleAddOption = () => {
    // const newAnswer = {
    //   text: 'edit answer 2',
    //   isRight: false,
    //   questionId: 143,
    // };
    onBlurAnswerValidation(answers.length - 1);
    // const updatedAnswers = [...answers];
    if (answers[answers.length - 1].versionAnswer == '') {
      console.log('insert answer');
    } else {
      props.createAnswerAction(answers[answers.length - 1]);
      setAnswer([...answers, { ...newAnswer }]);
    }

    // props.editAnswerAction(newAnswer)
    // props.deleteAnswerAction(144)
    // console.log(answers[answers.length - 1])
  };

  /** Удаляет поле ответа или отменяет изменения ответа. */
  const handleDeleteQuestion = (i: number) => {
    if (answers.length === 1) return false;
    const updatedAnswers = [...answers];
    // if (updatedAnswers[i].isEdit) {
    //   const prevValue = usePrevious(updatedAnswers[i].versionAnswer);
    //   updatedAnswers[i].isEdit = false;
    //   updatedAnswers.splice(i, 1);
    //   // updatedAnswers[i].versionAnswer = questions[i].versionAnswer;
    //   updatedAnswers[i].versionAnswer = prevValue as string | any;
    //   console.log(0);
    // } else {
    //   updatedAnswers[i].isEdit = true;
    //   console.log(1);
    // }
    updatedAnswers.splice(i, 1);
    setAnswer(updatedAnswers);
    onChange(answers);
  };

  /** Меняет состояние поля для редактирования. */
  const handleIsEditChanger = (i: number) => {
    const updatedAnswers = [...answers];
    if (updatedAnswers[i].isEdit) {
      updatedAnswers[i].isEdit = false;
    } else {
      updatedAnswers[i].isEdit = true;
    }
    setAnswer(updatedAnswers);
  };

  /** render блока ответов. */
  const answerFormRender = () => {
    return answers.map((el, i: any) => {
      return (
        <div key={i} className={s['answer-field']}>
          <RadioButton
            id='radioButton'
            onChange={(event) => handleChangeRadioButton(event, i)}
            extraClass={[s['extra-radio-button']]}
            checked={answers[i].isAnswer}
          />
          {/* <span>{i}</span> */}

          {/* {el.isEdit ? ( */}
          <Input
            onBlur={() => onBlurAnswerValidation(i)}
            onChange={(event) => handleChangeAnswer(event, i)}
            value={answers[i].versionAnswer}
            extraClass={[s['extra-input']]}
            name='versionAnswer'
            placeholder='Enter answer option'
            error={answers[i].isEmptyOption}
            showHint={answers[i].isEmptyOption}
            hint='Enter answer option'
          />
          {/* ) : (
            <span className={s['not-editable-span']}>
              {answers[i].versionAnswer}
            </span>
          )}

          <div className={s['button-block']}>
            <Button
              name='edit'
              onClick={() => handleIsEditChanger(i)}
              theme='green'
              text={el.isEdit ? 'save' : 'edit'}
              size='small'
            />

            <Button
              onClick={() => handleDeleteQuestion(i)}
              theme='red'
              text='delete'
              // text={el.isEdit ? 'cancel' : 'delete'}
              size='small'
            />
          </div> */}
        </div>
      );
    });
  };

  return (
    <div className={s['answer-adder-container']}>
      <Label text='Answer options' />
      {/* <ErrorLog text={errorText} /> */}
      <Button
        disabled={disabled}
        onClick={handleAddOption}
        text='add option'
        theme='green'
        size='small'
      />
      {answerFormRender()}
    </div>
  );
};

const mapDispatchToProps = {
  createAnswerAction,
  deleteAnswerAction,
  editAnswerAction,
};

const mapStateToProps = () => ({
  // isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerCreator);
