import React, { useState } from 'react';
import s from './QuestionAdder.styl';
import { IAppState } from '../../Types/Types';
import RadioButton from "../../Components/RadioButton/RadioButton";
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input'

const QuestionAdder = ({ ...props }) => {

  return (
    <div className={s['question-adder-container']}>
      QuestionAdder
    </div>
  );
};

export default QuestionAdder;
