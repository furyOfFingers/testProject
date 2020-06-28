import React, { useState, useEffect } from 'react';
import Table from '../../Components/Table/Table';
import { IAppState } from '../../Types/Types';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import s from './TestsAndQuestions.styl';
import {
  createTestAction,
  getTestAction,
  editTestAction,
  deleteTestAction,
  getAllTestsAction,
} from '../../Redux/Tests/TestsActions';
import {
  createQuestionAction,
  editQuestionAction,
  deleteQuestionAction,
} from '../../Redux/Questions/QuestionActions';
import { getCurrentUserAction } from '../../Redux/Authorization/AuthorizationActions';
// import {CreateTest} from '../../Sagas/Tests/CreateTest';
import CreateQuestion from '../CreateQuestion/CreateQuestion';
import EditField from '../EditField/EditField';
import Label from '../../Components/Label/Label';
import ActionBar from './ActionBar/ActionBar';

const TestsAndQuestions = ({ ...props }) => {
  const tableTestHeader = ['#', 'Test name', 'Time of creation', 'Actions'];
  const tableQuestionHeader = ['#', 'Question', 'Type', 'Answers', 'Actions'];
  const [testDataByClick, settestDataByClick] = useState({});

  /** ComponentDidMount на загрузку тестов. */
  useEffect(() => {
    props.getAllTestsAction()
  }, []);

  const getAllTests = () => {
    props.getAllTestsAction();
  };

  const onQuestionClick = (el:any) => {
    settestDataByClick(el)
    console.log(el)
  }

  const onTestClick = (el:any) => {
    settestDataByClick(el)
  }

  /** Рендерит тело таблицы тестов. */
  const renderTestTableBody = () => {
    return Object.keys(props.test).map((el: any, key: number) => {
      return (
        <tr onClick={() => onTestClick(props.test[el])} key={key}>
          <td>{props.test[el].id}</td>
          <td className={s['data-body-table-title']}>
            {props.test[el].title}
          </td>
          <td>{props.test[el].created_at}</td>
          <td>
            <ActionBar
              data={props.test[el]}
              isTest
              isEditBtn
            />
          </td>
        </tr>
      );
    });
  };

  /** Рендерит тело таблицы вопросов. */
  const renderQuestionTableBody = () => {
    let allQuestions: any = [];

    for (let el in props.test) {
      allQuestions = [...allQuestions, props.test[el].questions];
    }

    return Object.keys(allQuestions).map((questions) => {
      return allQuestions[questions].map((el: any, key: number) => {
        return (
          <tr onClick={() => onQuestionClick(el)} key={key}>
            <td>{el.id}</td>
            <td className={s['data-body-table-title']}>
              {el.title}
            </td>
            <td>{el.question_type}</td>
            <td>{el.answers.length}</td>
            <td>
              <ActionBar
                data={el}
                isQuestion
                isEditBtn
              />
            </td>
          </tr>
        );
      });
    });
  };

  return (
    <div className={s['create-page-container']}>
      <div className={s['test-container']}>
        <Label text='Tests' />
        <Table body={renderTestTableBody} header={tableTestHeader} />
        <EditField/>
      </div>

      <div className={s['question-container']}>
        <Label text='Questions' />
        <Table body={renderQuestionTableBody} header={tableQuestionHeader} />
        <CreateQuestion />

        <div>
          <Button onClick={getAllTests} text='get All Tests' />
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
  getAllTestsAction,
};

const mapStateToProps = (state: IAppState) => ({
  isAdmin: state.authorization.isAdmin,
  test: state.test,
});

export default connect(mapStateToProps, mapDispatchToProps)(TestsAndQuestions);
