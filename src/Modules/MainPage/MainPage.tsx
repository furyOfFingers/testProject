import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Button/Button';
import s from './MainPage.styl';
import { IAppState } from '../../Types/Types';

const MainPage = ({ ...props }) => {
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

    const addTest = () => {
      
    }

  return (
    <div className={s['main-page-container']}>
      <div className={s['table-container']}>
        <Table data={tableData} header={tableHeader} />
      </div>

      <div className={s['add-test-button']}>
        <Button onClick={addTest} text='Add Test' />
      </div>
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAuth: state.authorization.isAuth,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
