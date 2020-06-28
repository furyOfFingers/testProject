import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from '../EditField.styl';
import Label from '../../../Components/Label/Label';
import ActionBar from '../../TestsAndQuestions/ActionBar/ActionBar';
import Table from '../../../Components/Table/Table';
import { IAppState } from '../../../Types/Types';
import AnswerEditContainer from '../EditContainer/AnswerEditContainer';

interface IEditFieldProps {
  /** Данные редактируемого элемента */
  data: any;
}

/** Компонент ответов к редактируемому вопросу. */
const AnswersTable = ({ data, ...props }: IEditFieldProps) => {
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState({});

  const tableAnswerHeader = ['#', 'Answers', 'Is right', 'Actions'];

  /** Рендерит уведомление о пустом списке ответов. */
  const emptyAnswer = () => {
    return (
      <>
        <Label
          extraClass={[s['extra-label']]}
          text={`Answers to question number '${data.id}'`}
        />
        <span className={s['info-span']}>
          there are no answers in this question
        </span>
      </>
    );
  };

  /** Отображает блок редактирования ответа. */
  const showEditBlock = (id: number) => {
    data.answers.map((answer: any) => {
      if(answer.id === id) {
          // console.log(answer)
          setEditData(answer);
      }
  })
    setShow(true);
  };

  const onAnswerClick = (answer: any) => {
    console.log(answer, 'answer');
  };

  /** Рендерит ответы к редактируемому вопросу. */
  const renderQuestionTableBody = () => {
    return data.answers.map((answer: any, key: any) => {
      return (
        <tr
          onClick={() => {
            onAnswerClick(answer);
          }}
          key={key}
        >
          <td>{answer.id}</td>
          <td className={s['data-body-title']}>{answer.text}</td>
          <td>{answer.is_right && <span>True</span>}</td>
          <td>
            <ActionBar
              data={answer}
              onEditClick={showEditBlock}
              isEditBtn
              isAnswer
            />
          </td>
        </tr>
      );
    });
  };

  const isEmptyAnswer =
    !Array.isArray(data.answers) || !data.answers.length ? true : false;

  return isEmptyAnswer ? (
    emptyAnswer()
  ) : (
    <>
      <Label
        extraClass={[s['extra-label']]}
        text={`Answers to question number '${data.id}'`}
      />

      <Table
        body={() => renderQuestionTableBody()}
        header={tableAnswerHeader}
      />

      {show && <AnswerEditContainer editData={editData} />}
    </>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: IAppState) => ({
  isOpen: state.testsAndQuestions.isOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswersTable);
