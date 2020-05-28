import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Button/Button';
import s from './CreateQuestion.styl';
import { IAppState } from '../../Types/Types';
import axios from 'axios';
import RadioButton from "../../Components/RadioButton/RadioButton";

const CreateQuestion = ({ ...props }) => {

  return (
    <div className={s['create-question-container']}>
      CreateQuestion
      <RadioButton/>
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
