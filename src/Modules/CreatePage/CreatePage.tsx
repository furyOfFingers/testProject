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
  deleteTestAction
} from '../../Redux/Tests/TestsActions';
import { createQuestionAction, editQuestionAction, deleteQuestionAction } from '../../Redux/Questions/QuestionActions';
// import {CreateTest} from '../../Sagas/Tests/CreateTest';
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import CreateTest from "../CreateTest/CreateTest";

const CreateTestPage = ({ ...props }) => {
  const tableHeader = ['#', 'Task name', 'Type', 'Time of creation'];
  const tableData = [
    { id: 1, name: 'story', type: 'single', timeOfCreation: '20.03.2020' },
    { id: 2, name: 'auto', type: 'multiple', timeOfCreation: '03.03.2020' },
    { id: 3, name: 'dance', type: 'number', timeOfCreation: '10.04.2020' },
    { id: 4, name: 'story', type: 'single', timeOfCreation: '20.03.2020' },
    { id: 5, name: 'auto', type: 'multiple', timeOfCreation: '03.03.2020' },
    { id: 6, name: 'dance', type: 'number', timeOfCreation: '10.04.2020' }
  ];

  const createTest = () => {
    // const editData = {
    //   id: '127',
    //   title: 'newTaskTitle',
    // };

    // const createQuestion = {
    //   title: 'question',
    //   questionType: 'single',
    //   answer: 3,
    //   testId: 126
    // }
    
    // props.createTestAction('newTest');
    // props.editTestAction(editData);
    // props.deleteTestAction('127');
    // CreateTest('newTest')
    // props.createQuestionAction(createQuestion);

    const editQuestion = {
      title: 'questionedit',
      questionType: 'single',
      answer: '2',
      questionId: '303'
    }
    props.editQuestionAction(editQuestion);
  };

  const createQuestion = () => {
    props.deleteQuestionAction('303')
    console.log('ss');
    // props.getTestAction('127');
  };

  return (
    <div className={s['create-page-container']}>
      <div className={s['test-container']}>
        <span></span>
        <Table data={tableData} header={tableHeader} />
        <CreateTest/>

        <div>
          <Button onClick={createTest} text='Create Test' />
        </div>
      </div>

      <div className={s['question-container']}>
        <Table data={tableData} header={tableHeader} />
        <CreateQuestion/>

        <div>
          <Button onClick={createQuestion} text='Create Question' />
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
  deleteQuestionAction
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTestPage);
