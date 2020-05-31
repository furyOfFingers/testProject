import React, { useState } from 'react';
import s from './QuestionAdder.styl';
// import { IAppState } from '../../Types/Types';
import RadioButton from '../../../Components/RadioButton/RadioButton';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import Select from '../../../Components/Select/Select';

interface IQuestionProps {
  /** Признак правильного варианта ответа на вопрос. */
  answer: boolean;
  /** Вариант ответа на вопрос. */
  versionAnswer: string;
}

interface IQuestionAdderProps {
  /** onChange компонетна QuestionAdder. */
  onChange?: ((option: string) => void) | any;
}
/**
 * Компонент QuestionAdder.
 */
const QuestionAdder = ({ onChange, ...props }: IQuestionAdderProps) => {
  const newQuestion: IQuestionProps = {
    answer: false,
    versionAnswer: '',
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
    questions.map((el) => el.answer = false);
    const updatedQuestions = [...questions];
    updatedQuestions[i].answer = event.currentTarget.checked;
    setQuestion(updatedQuestions)
  };

  /** Добавляет варианта ответа. */
  const handleAddQuestion = () => {
    setQuestion([...questions, { ...newQuestion }]);
  };

  /** Удаляет вариант ответа. */
  const handleDeleteQuestion = (i: number) => {
    if (questions.length === 1) return false;
    const tempQuestions = [...questions];
    tempQuestions.splice(i, 1);
    setQuestion(tempQuestions);
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
          <span>{i}</span>
          <Input
            name='versionAnswer'
            onChange={(event) => handleChangeAnswer(event, i)}
            value={questions[i].versionAnswer}
            extraClass={[s['extra-input']]}
          />
          {/* 
          <Button
            onClick={() => handleAddQuestion(i)}
            theme='green'
            text='edit'
            type='icon'
          /> */}

          <Button
            onClick={() => handleDeleteQuestion(i)}
            theme='red'
            text='delete'
            type='icon'
          />
        </div>
      );
    });
  };

  return (
    <div className={s['question-adder-container']}>
      QuestionAdder
      <Button theme='green' text='add' onClick={handleAddQuestion} />
      {questionAdderFormRender()}
    </div>
  );
};

export default QuestionAdder;
