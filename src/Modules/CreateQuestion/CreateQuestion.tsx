import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Button/Button';
import s from './CreateQuestion.styl';
import { IAppState } from '../../Types/Types';
import axios from 'axios';
import RadioButton from "../../Components/RadioButton/RadioButton";
import Select from "../../Components/Select/Select";

const CreateQuestion = ({ ...props }) => {

  const handleOnClickSelect = () => {
    console.log(1)
  }

  return (
    <div className={s['create-question-container']}>
      <span>CreateQuestion</span>
      {/* <RadioButton/> */}
      <Select />
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
