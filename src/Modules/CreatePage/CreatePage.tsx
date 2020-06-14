import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import { IAppState } from '../../Types/Types';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import s from './CreatePage.styl';
import {
  createTestAction,
  getTestAction,
  editTestAction,
  deleteTestAction,
  getAllTestsAction
} from '../../Redux/Tests/TestsActions';
import {
  createQuestionAction,
  editQuestionAction,
  deleteQuestionAction,
} from '../../Redux/Questions/QuestionActions';
import { getCurrentUserAction } from '../../Redux/Authorization/AuthorizationActions';
// import {CreateTest} from '../../Sagas/Tests/CreateTest';
import CreateQuestion from '../CreateQuestion/CreateQuestion';
import CreateTest from '../CreateTest/CreateTest';
import Label from '../../Components/Label/Label';

const CreateTestPage = ({ ...props }) => {
  const tableTestHeader = ['#', 'Title', 'Time of creation'];
  const tableHeader = ['#', 'Title', 'Type', 'Time of creation'];
  const tableData = [
    { id: 1, title: 'story', type: 'single', created_at: '20.03.2020' },
    { id: 2, title: 'auto', type: 'multiple', created_at: '03.03.2020' },
    { id: 3, title: 'dance', type: 'number', created_at: '10.04.2020' },
    { id: 4, title: 'story', type: 'single', created_at: '20.03.2020' },
    { id: 5, title: 'auto', type: 'multiple', created_at: '03.03.2020' },
    { id: 6, title: 'dance', type: 'number', created_at: '10.04.2020' },
  ];

  const createTest = () => {
    // const editData = {
    //   id: '127',
    //   title: 'newTaskTitle',
    // };

    const createQuestion = {
      title: 'second question with option adder function',
      questionType: 'single',
      /**answer можно потом передать вместе с вариантами ответов */
      answer: 1,
      answers: [],
      testId: 134,
    };

    // props.createTestAction('username00Test');
    // props.editTestAction(editData);
    // props.deleteTestAction('127');
    // CreateTest('newTest')
    props.createQuestionAction(createQuestion);

    const editQuestion = {
      title: 'questionedit',
      questionType: 'single',
      answer: '1',
      answers: ['22', '22'],
      questionId: '317',
    };
    // props.editQuestionAction(editQuestion);
  };

  const createQuestion = () => {
    // props.deleteQuestionAction('309')
    // props.getCurrentUserAction()
    props.getTestAction('134');
  };

  const getAllTests = () => {
    props.getAllTestsAction()
  }

  return (
    <div className={s['create-page-container']}>
      <div className={s['test-container']}>
        <span></span>
        <Label text='Tests' />
        <Table data={props.test} header={tableTestHeader} />
        <CreateTest />

        <div>
          <Button onClick={createTest} text='creaTE question' />
        </div>
      </div>

      <div className={s['question-container']}>
        <Label text='Questions' />
        <Table data={tableData} header={tableHeader} />
        <CreateQuestion />

        <div>
          <Button onClick={createQuestion} text='get Question' />
          <Button onClick={getAllTests} text='get All Tests' />
          <Button onClick={()=> { console.log(props.test, 'redux')} } text='console All Tests' />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  createTestAction,
  getTestAction,
  editTestAction,
  deleteTestAction,
  createQuestionAction,
  editQuestionAction,
  deleteQuestionAction,
  getCurrentUserAction,
  getAllTestsAction
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
  test: state.test,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTestPage);
