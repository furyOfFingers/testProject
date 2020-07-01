import React, { useState, useEffect } from 'react';
import Table from '../../Components/Table/Table';
import { IAppState } from '../../Types/Types';
import { connect } from 'react-redux';
import s from './TestsAndQuestions.styl';
import { getAllTestsAction } from '../../Redux/Tests/TestsActions';
import CreationField from '../CreationField/CreationField';
import EditField from '../EditField/EditField';
import Label from '../../Components/Label/Label';
import ActionBar from './ActionBar/ActionBar';
// import { elClickAction } from '../../Redux/TestsAndQuestions/TestsAndQuestionsActions';

interface ITestsAndQuestionsProps {
  /** Признак открытия блока редактирования тестов или ответов. */
  isTest?: boolean;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на создание вопроса. */
  createQuestionAction: any;
}

const TestsAndQuestions = ({ ...props }) => {
  const tableTestHeader = ['#', 'Test name', 'Time of creation', 'Actions'];
  const tableQuestionHeader = ['#', 'Question', 'Type', 'Answers', 'Actions'];
  const [actualAnswers, setActualAnswers] = useState({});
  const [dataByClick, setDataByClick] = useState({
    id: 0,
    name: '',
    question_type: '',
  });

  useEffect(() => {
    props.getAllTestsAction();
  }, []);

  useEffect(() => {
    return getActualData(props.test);
  }, [props.test]);

  const getActualData = (test: any) => {
    getActualQuestionId(test);
    getActualAnswers(test);
  }

  /** Полуает данные по вопросам. */
  const getActualQuestionId = (item: any) => {
    let idArr = [] as number[];
    Object.keys(item).map((obj: any) => {
      item[obj].questions.map((el: any) => {
        idArr.push(el.id);
        // idArr.reverse();
      });
    });

    setDataByClick({
      ...dataByClick,
      name: 'auto',
      id: Math.max(...idArr),
    });
  };

  /** Получает ответы. */
  const getActualAnswers = (item: any) => {
    let answerArr = [] as any;
    Object.keys(item).map((obj) => {
      item[obj].questions.map((question: any) => {
        question.answers.map((answer: any) => {
          answerArr.push(answer)
        });
      });
    });
    setActualAnswers(answerArr)
  }

  const onElClick = (el: any, name: string) => {
    setDataByClick({
      ...dataByClick,
      id: el.id,
      name: name,
      question_type: el.question_type,
    });
    console.log(dataByClick);
  };

  /** Рендерит тело таблицы тестов. */
  const renderTestTableBody = () => {
    return Object.keys(props.test).map((el: any, key: number) => {
      return (
        <tr onClick={() => onElClick(props.test[el], 'test')} key={key}>
          <td>{props.test[el].id}</td>
          <td className={s['data-body-table-title']}>{props.test[el].title}</td>
          <td>{props.test[el].created_at}</td>
          <td>
            <ActionBar data={props.test[el]} isTest isEditBtn />
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
          <tr onClick={() => onElClick(el, 'question')} key={key}>
            <td>{el.id}</td>
            <td className={s['data-body-table-title']}>{el.title}</td>
            <td>{el.question_type}</td>
            <td>{el.answers.length}</td>
            <td>
              <ActionBar data={el} isQuestion isEditBtn />
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
        <EditField />
      </div>

      <div className={s['question-container']}>
        <Label text='Questions' />
        <Table body={renderQuestionTableBody} header={tableQuestionHeader} />
        <CreationField
          dataByClick={dataByClick}
          actualAnswers={actualAnswers}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getAllTestsAction,
  // elClickAction,
};

const mapStateToProps = (state: IAppState) => ({
  test: state.test,
});

export default connect(mapStateToProps, mapDispatchToProps)(TestsAndQuestions);
