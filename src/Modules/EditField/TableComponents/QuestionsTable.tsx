import React from 'react';
import s from '../EditField.styl';
import Label from '../../../Components/Label/Label';
import ActionBar from '../../TestsAndQuestions/ActionBar/ActionBar';
import Table from '../../../Components/Table/Table';

interface IEditFieldProps {
  /** Данные редактируемого элемента */
  data: any;
}

/** Компонент ответов к редактируемому вопросу. */
const QuestionsTable = ({ data }: IEditFieldProps) => {
  const tableQuestionHeader = ['#', 'Question', 'Type', 'Answers', 'Actions'];

  /** Рендерит уведомление о пустом списке вопросов. */
  const emptyQuestion = () => {
    return (
      <>
        <Label
          extraClass={[s['extra-label']]}
          text={`Test questions number '${data.id}'`}
        />

        <span className={s['info-span']}>
          there are no questions in this test
        </span>
      </>
    );
  };

  /** Рендерит вопросы к редактируемому тесту. */
  const renderQuestionTableBody = () => {
    return data.questions.map((question: any, key: any) => {
      return (
        <tr key={key}>
          <td>{question.id}</td>
          <td className={s['data-body-title']}>{question.title}</td>
          <td>{question.question_type}</td>
          <td>{question.answers.length}</td>
          <td>
            <ActionBar data={question} />
          </td>
        </tr>
      );
    });
  };

  const isEmptyAnswer =
    !Array.isArray(data.questions) || !data.questions.length ? true : false;

  return isEmptyAnswer ? (
    emptyQuestion()
  ) : (
    <>
      <Label
        extraClass={[s['extra-label']]}
        text={`Test questions number '${data.id}'`}
      />

      <Table
        body={() => renderQuestionTableBody()}
        header={tableQuestionHeader}
      />
    </>
  );
};

export default QuestionsTable;
