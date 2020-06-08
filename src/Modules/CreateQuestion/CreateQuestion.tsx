import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './CreateQuestion.styl';
import { IAppState, IQuestionProps } from '../../Types/Types';
import Select from '../../Components/Select/Select';
import { createQuestionAction } from '../../Redux/Questions/QuestionActions';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import QuestionAdder from './QuestionAdder/QuestionAdder';
import Label from '../../Components/Label/Label';

const CreateQuestion = ({ ...props }) => {
  const [questionForm, setQuestionForm] = useState({
    title: 'qw',
    questionType: 'single',
    answer: 1,
    answers: ['12', '22'],
    testId: 126,
  });
  const [isEditTitle, setIsEditTitle] = useState(false);

  const handleChange = (option: string) => {
    setQuestionForm({ ...questionForm, questionType: option });
  };

  const createQuestion = () => {
    props.createQuestionAction(questionForm);
    console.log('ss');
  };

  const onChangeQuestionAdder = (questions: IQuestionProps) => {
    console.log(questions);
    // setQuestionForm({
    //   ...questionForm,
    //   answers: questions.versionAnswer
    // });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionForm({ ...questionForm, title: event.currentTarget.value });
  };

  /** Добавляет варианта ответа. */
  const handleAddQuestion = () => {
    const newAnswer = {
      text: 'edit answer 2',
      isRight: false,
      questionId: 143,
    };
    // props.createAnswerAction(newAnswer)
    // props.editAnswerAction(newAnswer)
    props.deleteAnswerAction(144);
    // setQuestion([...questions, { ...newQuestion }]);
  };

  const handleIsEditChanger = () => {
    if (isEditTitle) {
      setIsEditTitle(false);
    } else {
      setIsEditTitle(true);
    }
  };

  return (
    <div className={s['create-question-container']}>
      <div className={s['question-title-block']}>
        <Label text='Question title' />
        <div className={s['title-block']}>
          {isEditTitle ? (
            <Input
              onChange={handleTitleChange}
              value={questionForm.title}
              name='title'
              placeholder='Enter question'
            />
          ) : (
            <span className={s['not-editable-span']}>{questionForm.title}</span>
          )}

          <div className={s['button-block']}>
            <Button
              name='edit'
              onClick={handleIsEditChanger}
              theme='green'
              text={isEditTitle ? 'save' : 'edit'}
              size='small'
            />

            <Button
              onClick={() => {}}
              theme='red'
              text={isEditTitle ? 'cancel' : 'delete'}
              size='small'
            />
          </div>
        </div>
      </div>
      <Label text='Choose the type of question' />

      <div className={s['select-and-add-option-block']}>
        <Select onChange={handleChange} />

        <Button
          onClick={handleAddQuestion}
          size='small'
          theme='green'
          text='Add Question'
          extraClass={[s['extra-button']]}
        />
      </div>
      <QuestionAdder onChange={onChangeQuestionAdder} />

      <div>
        <Button onClick={createQuestion} text='Create Question' />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createQuestionAction,
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
