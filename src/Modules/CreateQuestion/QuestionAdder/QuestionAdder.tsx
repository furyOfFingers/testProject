import React, { useState } from 'react';
import s from './QuestionAdder.styl';
// import { IAppState } from '../../Types/Types';
import RadioButton from '../../../Components/RadioButton/RadioButton';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import Select from '../../../Components/Select/Select';

interface IQuestionProps {
  /**  */
  id: number;
  /**  */
  answer: boolean;
  /**  */
  versionAnswer: string;
}

interface IQuestionAdderProps {
  /** onChange компонетна QuestionAdder. */
  onChange?: ((option: string) => void) | any;
}

const QuestionAdder = ({ onChange, ...props }: IQuestionAdderProps) => {
  const [questions, setQuestion] = useState([
    {
      id: 0,
      answer: false,
      versionAnswer: '',
    } as IQuestionProps,
  ]);

  const handleChangeAnswer = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    setQuestion(
      questions.map((item) =>
        item.id === i
          ? { ...item, versionAnswer: event.currentTarget.value }
          : item
      )
    );
    // let newQuestionsArr = [...questions];
    // newQuestionsArr[i].versionAnswer = event.target.value;
    // setQuestion(newQuestionsArr)
  };

  const handleChangeRadioButton = (i: number) => {
    console.log(typeof i);
  };

  /** Добавляет поле варианта ответа. */
  const handleAddQuestion = () => {
    const newQuestion: IQuestionProps = {
      id: ++questions[0].id,
      answer: false,
      versionAnswer: '',
    };
    setQuestion((questions) => [...questions, newQuestion]);
  };

const handleDeleteQuestion = (i: number) => {
  console.log(i)
  // if (questions.length  === 1) return false
  // const tempQuestions = [...questions];
  // tempQuestions.splice(i, 1)
  // setQuestion(tempQuestions)

  // setQuestion(questions.splice(i, 1))
  // setQuestion(questions.filter(item => item.id !== i))
}

  /** render блока ответов. */
  const questionAdderFormRender = () => {
    return questions.map((el, i: number) => {
      return (
        <div key={i} className={s['question-field']}>
          <RadioButton
            onChange={() => handleChangeRadioButton(i)}
            extraClass={[s['extra-radio-button']]}
            checked={el.answer}
          />
          <span>{el.id}</span>
          <Input
            onChange={(event) => handleChangeAnswer(event, i)}
            value={el.versionAnswer}
            extraClass={[s['extra-input']]}
            name='question'
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
