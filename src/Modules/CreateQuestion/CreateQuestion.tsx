import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './CreateQuestion.styl';
import { IAppState } from '../../Types/Types';
import RadioButton from "../../Components/RadioButton/RadioButton";
import Select from "../../Components/Select/Select";
import {createQuestionAction} from '../../Redux/Questions/QuestionActions';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input'

const CreateQuestion = ({ ...props }) => {
  const [questionForm, setQuestionForm] = useState({
    title: '',
    questionType: '',
    answer: '',
    testId: ''
  })

  const handleChange = (option: string) => {
    setQuestionForm({...questionForm, questionType: option})
    console.log(questionForm, 'questionForm')
    console.log(props.option, 'props.option')
  }

  const createQuestion = () => {
    props.createQuestionAction(questionForm)
    console.log('ss');
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionForm({...questionForm, title: event.currentTarget.value})
  }

  return (
    <div className={s['create-question-container']}>
      <span>CreateQuestion</span>
      {/* <RadioButton/> */}
      <Select onChange={handleChange}/>

      {/* <div className={s['create-question-container']}> */}

        <Input
          onChange={handleTitleChange}
          value={questionForm.title}
          name='title'
          placeholder='Enter task title'
        />

      {/* </div> */}

      <div>
        <Button onClick={createQuestion} text='Create Question' />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createQuestionAction
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
