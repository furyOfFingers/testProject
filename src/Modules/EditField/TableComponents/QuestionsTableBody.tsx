import React from 'react';
import s from '../EditField.styl';
import Label from '../../../Components/Label/Label';
import TestsAndQuestionsActionsPanel from '../../TestsAndQuestions/ActionsPanel/TestsAndQuestionsActionsPanel';
import Table from '../../../Components/Table/Table';

const tableAnswerHeader = ['#', 'Answers', 'Is right', 'Actions'];

/** Рендерит уведомление о пустом списке ответов. */
const emptyAnswer = (id: number) => {
  return (
    <>
      <Label extraClass={[s['extra-label']]} text={`Answers to question number '${id}'`} />
      <span className={s['info-span']}> there are no answers in this question </span>
    </>
  )
}
const onAnswerClick = (answer: any) => {
  console.log(answer, 'answer')
}

/** Рендерит ответы к редактируемому вопросу. */
export const renderQuestionTableBody = (editData: any) => {
  return editData.answers.map((answer: any, key: any) => {
    return (
      <tr onClick={() => onAnswerClick(answer)} key={key}>
        <td>{answer.id}</td>
        <td className={s['data-body-title']}>{answer.text}</td>
        <td>{answer.is_right && <span>True</span>}</td>
        <td>
          <TestsAndQuestionsActionsPanel data={answer} isAnswerOpen />
        </td>
      </tr>
    );
  });
};

  /** Рендерит тело таблицы ответов к редактируемому вопросу. */
  export const renderQuestionEditBody = (data: any) => {
    if (!Array.isArray(data.answers) || !data.answers.length) {
      return emptyAnswer(data.id);
    } else {
      return (
        <>
          <Label extraClass={[s['extra-label']]} text={`Answers to question number '${data.id}'`} />
          <Table body={() => renderQuestionTableBody(data)} header={tableAnswerHeader} />
        </>
      );
    }
  };