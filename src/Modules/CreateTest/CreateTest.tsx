import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Button/Button';
import s from './CreateTest.styl';
import { IAppState } from '../../Types/Types';
import axios from 'axios';

const CreateTest = ({ ...props }) => {

  return (
    <div className={s['create-test-container']}>
      CreateTest
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTest);
