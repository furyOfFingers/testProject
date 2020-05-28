import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../Components/Table/Table';
import Button from '../../Components/Button/Button';
import s from './MainPage.styl';
import { IAppState } from '../../Types/Types';
import axios from 'axios';

const MainPage = ({ ...props }) => {
  const tableHeader = ['#', 'Task name', 'Type', 'Time of creation'];
  const tableData = [
    { id: 1, name: 'story', type: 'single', timeOfCreation: '20.03.2020' },
    { id: 2, name: 'auto', type: 'multiple', timeOfCreation: '03.03.2020' },
    { id: 3, name: 'dance', type: 'number', timeOfCreation: '10.04.2020' },
  ];

  const addTest = () => {
    console.log(props.isAdmin);

  };

  return (
    <div className={s['main-page-container']}>
      <div className={s['table-container']}>
        <Table data={tableData} header={tableHeader} />
      </div>

      {/* {props.isAdmin && ( */}
        <div className={s['add-test-button']}>
          <Button onClick={addTest} text='Add Test' />
        </div>
      {/* // )} */}
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
