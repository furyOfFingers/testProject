import React, { useState } from 'react';
import Table from '../../Components/Table/Table';
import { IAppState } from '../../Types/Types';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import s from './CreateTestPage.styl';


const CreateTestPage = ({...props}) => {
  const tableHeader = props.isAuth
  ? ['#', 'Task name', 'Type', 'Time of creation']
  : ['#', 'Task name', 'Type', 'Time of creation', 'Action'];
const tableData = props.isAuth ?
[ { id: 1, name: 'story', type: 'single', timeOfCreation: '20.03.2020' },
  { id: 2, name: 'auto', type: 'multiple', timeOfCreation: '03.03.2020' },
  { id: 3, name: 'dance', type: 'number', timeOfCreation: '10.04.2020' }] :
[ { id: 1, name: 'story', type: 'single', timeOfCreation: '20.03.2020', action: 'delete' },
  { id: 2, name: 'auto', type: 'multiple', timeOfCreation: '03.03.2020', action: 'delete' },
  { id: 3, name: 'dance', type: 'number', timeOfCreation: '10.04.2020', action: 'delete' }];

  const createTest = () => {};
  const createQuestion = () => {console.log('ss')};

  return (
    <div className={s['create-test-page-container']}>
      <div className={s['test-container']}>
        <span></span>
        <Table data={tableData} header={tableHeader} />

        <div>
          <Button onClick={createTest} text='Create Test' />
        </div>
      </div>

      <div className={s['question-container']}>
        <Table data={tableData} header={tableHeader} />

        <div>
          <Button onClick={createQuestion} text='Create Question' />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAuth: state.authorization.isAuth,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTestPage);
