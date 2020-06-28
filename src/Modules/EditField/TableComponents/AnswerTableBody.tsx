import React from 'react';
import s from '../EditField.styl';
import Label from '../../../Components/Label/Label';
import TestsAndQuestionsActionsPanel from '../../TestsAndQuestions/ActionsPanel/TestsAndQuestionsActionsPanel';
import Table from '../../../Components/Table/Table';

const tableQuestionHeader = ['#', 'Question', 'Type', 'Answers', 'Actions'];

/** Рендерит уведомление о пустом списке вопросов. */
const emptyQuestion = (id: number) => {
  return (
    <>
      <Label
        extraClass={[s['extra-label']]}
        text={`Test questions number '${id}'`}
      />

      <span className={s['info-span']}>
        there are no questions in this test
      </span>
    </>
  );
};

/** Рендерит вопросы к редактируемому тесту. */
export const renderQuestionTableBody = (editData: any) => {
  return editData.questions.map((question: any, key: any) => {
    return (
      <tr key={key}>
        <td>{question.id}</td>
        <td className={s['data-body-title']}>{question.title}</td>
        <td>{question.question_type}</td>
        <td>{question.answers.length}</td>
        <td>
          <TestsAndQuestionsActionsPanel data={question} />
        </td>
      </tr>
    );
  });
};

/** Рендерит тело таблицы вопросов к редактируемому тесту. */
export const renderAnswerEditBody = (data: any) => {
  if (!Array.isArray(data.questions) || !data.questions.length) {
    return emptyQuestion(data.id);
  } else {
    return (
      <>
        <Label
          extraClass={[s['extra-label']]}
          text={`Test questions number '${data.id}'`}
        />

        <Table
          body={() => renderQuestionTableBody(data)}
          header={tableQuestionHeader}
        />
      </>
    );
  }
};
