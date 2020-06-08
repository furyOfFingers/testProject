import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './QuestionAdder.styl';
import RadioButton from '../../../Components/RadioButton/RadioButton';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import { IQuestionProps } from '../../../Types/Types';
import { createAnswerAction, editAnswerAction, deleteAnswerAction } from '../../../Redux/Answers/AnswerActions';

interface IQuestionAdderProps {
  /** onChange компонетна QuestionAdder. */
  onChange?: ((option: string) => void) | any;
  /**  */
  createAnswerAction?: any
  /**  */
  editAnswerAction?: any
  /**  */
  deleteAnswerAction?: any
}
/**
 * Компонент QuestionAdder.
 */
const QuestionAdder = ({ onChange, ...props }: IQuestionAdderProps) => {
  const newQuestion: IQuestionProps = {
    answer: false,
    versionAnswer: 'insert option',
    isEdit: false,
  };

  const [questions, setQuestion] = useState([
    { ...newQuestion } as IQuestionProps,
  ]);

  /** Изменяет значение поля Input. */
  const handleChangeAnswer = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[i].versionAnswer = event.target.value;
    setQuestion(updatedQuestions);
  };

  /** Изменяет значение поля RadioButton. */
  const handleChangeRadioButton = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    questions.map((el) => (el.answer = false));
    const updatedQuestions = [...questions];
    updatedQuestions[i].answer = event.currentTarget.checked;
    setQuestion(updatedQuestions);
    onChange(questions);
  };

  /** Добавляет варианта ответа. */
  const handleAddQuestion = () => {
    const newAnswer ={
      text: 'edit answer 2',
      isRight: false,
      questionId: 143
    }
    // props.createAnswerAction(newAnswer)
    // props.editAnswerAction(newAnswer)
    props.deleteAnswerAction(144)
    // setQuestion([...questions, { ...newQuestion }]);
  };

  /** Удаляет поле ответа или отменяет изменения ответа. */
  const handleDeleteQuestion = (i: number) => {
    if (questions.length === 1) return false;
    const updatedQuestions = [...questions];
    // if (updatedQuestions[i].isEdit) {
    //   const prevValue = usePrevious(updatedQuestions[i].versionAnswer);
    //   updatedQuestions[i].isEdit = false;
    //   updatedQuestions.splice(i, 1);
    //   // updatedQuestions[i].versionAnswer = questions[i].versionAnswer;
    //   updatedQuestions[i].versionAnswer = prevValue as string | any;
    //   console.log(0);
    // } else {
    //   updatedQuestions[i].isEdit = true;
    //   console.log(1);
    // }
    updatedQuestions.splice(i, 1);
    setQuestion(updatedQuestions);
    onChange(questions);
  };

  /** Меняет состояние поля для редактирования. */
  const handleIsEditChanger = (i: number) => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[i].isEdit) {
      updatedQuestions[i].isEdit = false;
    } else {
      updatedQuestions[i].isEdit = true;
    }
    setQuestion(updatedQuestions);
  };

  /** render блока ответов. */
  const questionAdderFormRender = () => {
    return questions.map((el, i: any) => {
      return (
        <div key={i} className={s['question-field']}>
          <RadioButton
            id='radioButton'
            onChange={(event) => handleChangeRadioButton(event, i)}
            extraClass={[s['extra-radio-button']]}
            checked={questions[i].answer}
          />
          {/* <span>{i}</span> */}

          {el.isEdit ? (
            <Input
              name='versionAnswer'
              onChange={(event) => handleChangeAnswer(event, i)}
              value={questions[i].versionAnswer}
              extraClass={[s['extra-input']]}
            />
          ) : (
            <span className={s['not-editable-span']}>
              {questions[i].versionAnswer}
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
          </div>
        </div>
      );
    });
  };

  return (
    <div className={s['question-adder-container']}>
      <Button theme='green' text='add option' onClick={handleAddQuestion} />
      {questionAdderFormRender()}
    </div>
  );
};

const mapDispatchToProps = {
  createAnswerAction,
  editAnswerAction,
  deleteAnswerAction
};

const mapStateToProps = () => ({
  // isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAdder);
