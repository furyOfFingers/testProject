import React, { useState, useEffect } from 'react';
import s from './Answer.styl';
import { connect } from 'react-redux';
import { IAnswerProps } from '../../../Types/Types';
import { getAllTestsAction } from '../../../Redux/Tests/TestsActions';
import {
  createAnswerAction,
  deleteAnswerAction,
  editAnswerAction,
} from '../../../Redux/Answers/AnswerActions';
import Label from '../../../Components/Label/Label';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';
// import Select from '../../../Components/Select/Select';
import ErrorLog from '../../../Components/ErrorLog/ErrorLog';
import RadioButton from '../../../Components/RadioButton/RadioButton';

interface IQuestionProps {
  /** Данные вопросов. */
  actualAnswers: any;
  /** Идентификатор актуального элемента. */
  dataByClick?: any;
  /** Идентификатор актуального элемента. */
  actualId?: any;
  /** Экшен на получение списка тестов. */
  getAllTestsAction: any;
  /** Экшен на создание вопроса. */
  createQuestionAction: any;
  /** Экшен на создание ответа */
  createAnswerAction: any;
  /** Экшен на удаление ответа. */
  deleteAnswerAction: any;
  /** Тип вопроса. */
  questionType: string;
  /** Экшен на редактирование ответа. */
  editAnswerAction: any;
}

/** Компонент создания ответа. */
const Question = ({
  actualAnswers,
  dataByClick,
  questionType,
  actualId,
  ...props
}: IQuestionProps) => {
  const newAnswer: IAnswerProps = {
    isRight: false,
    text: '',
    isEdit: true,
    isEmptyOption: false,
    questionId: 0,
    disabled: false,
    answerId: 0,
  };

  const [answers, setAnswer] = useState([{} as IAnswerProps]);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState('');
  // const [answerForm, setAnswerForm] = useState({
  //   text: '',
  //   isRight: false,
  //   questionId: 0,
  // });

  // useEffect(() => {
  //   if (dataByClick.name === 'auto' || dataByClick.name === 'question') {
  //     return initialSetState();
  //   }
  // }, [dataByClick]);

  // /** Устанавливает начальное значение. */
  // const initialSetState = () => {
  //   const updatedAnswers = [...answers];
  //   newAnswer.questionId = dataByClick.id;
  //   newAnswer.answerId = getLastAnswerId() + 1;
  //   updatedAnswers[0].questionId = dataByClick.id;
  //   updatedAnswers[0].answerId = getLastAnswerId() + 1;
  //   // console.log(updatedAnswers, 'updatedAnswers')
  //   // console.log(newAnswer, 'newAnswer')
  //   setAnswer(updatedAnswers);
  // };

  /**  Возвращает идентификатор последнего вопроса. */
  const getLastAnswerId = () => {
    let answerId = [] as any;
    actualAnswers.map((el: any) => {
      answerId.push(el.id);
    });
    return Math.max(...answerId);
  };

  // useEffect(() => {
  //   if (actualId.name === 'question') {
  //     setAnswerForm({
  //       ...answerForm,
  //       questionId: actualId.id
  //     });
  //   }
  // }, [actualId]);

  // /** Валидирует изменения. */
  // const onBlurTestValidation = () => {
  //   if (answerForm.text === '') {
  //     setDisabled(true);
  //   } else {
  //     setDisabled(false);
  //   }
  // };

  // /** Проверяет новый ответ на пустую строку. */
  // const onBlurAnswerValidation = (i: number) => {
  //   const updatedAnswers = [...answers];
  //   if (answers[i].text == '') {
  //     updatedAnswers[i].isEmptyOption = true;
  //     updatedAnswers[i].disabled = true;
  //     // setDisabled(true);
  //   } else {
  //     updatedAnswers[i].disabled = false;
  //     updatedAnswers[i].isEmptyOption = false;
  //     // setDisabled(false);
  //   }
  //   setAnswer(updatedAnswers);
  // };

  /** Проверяет на наличие редактируемых полей. */
  const getAtLeastOnceIsEdit = () => {
    let atLeastOnce = false;
    answers.map((el) => {
      if (el.isEdit) {
        atLeastOnce = true;
      }
    });
    return atLeastOnce;
  };

  /** Добавляет варианта ответа. */
  const handleAddOption = () => {
    if (JSON.stringify(answers[0]) === '{}') {
      answers.splice(0, 1);
    }

    if (getAtLeastOnceIsEdit()) {
      setError('Save unsaved changes');
      setTimeout(() => setError(''), 3000);
    } else {
      const answer = { ...newAnswer };
      answer.questionId = dataByClick.id;
      answer.answerId = getLastAnswerId();
      console.log(answer, 'answerhandleAdd');
      console.log(getLastAnswerId(), 'getLastAnswerId()');
      setAnswer([...answers, { ...answer }]);
    }

    // onBlurAnswerValidation(answers.length - 1);
    // const updatedAnswers = [...answers];
    // if (
    //   answers[answers.length - 1].text == ''
    //   ) {
    //     // updatedAnswers[answers.length].disabled = true;
    //   } else {
    //     // updatedAnswers[answers.length].disabled = false;
    //   // props.createAnswerAction(answers[answers.length - 1]);
    //   setAnswer([...answers, { ...newAnswer }]);
    // }

    // props.editAnswerAction(newAnswer)
    // props.deleteAnswerAction(144)
  };

  /** Изменяет значение поля RadioButton. */
  const handleChangeRadioButton = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    answers.map((el) => (el.isRight = false));
    const updatedAnswers = [...answers];
    updatedAnswers[i].isRight = event.currentTarget.checked;
    setAnswer(updatedAnswers);
    // onChange(answers);
  };

  /** Изменяет значение поля Input. */
  const handleChangeAnswer = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const reg = /[^+\d]/g;
    const updatedAnswers = [...answers];
    if (questionType === 'number') {
      updatedAnswers[i].text = event.target.value.replace(reg, '');
    } else {
      updatedAnswers[i].text = event.target.value;
    }
    // console.log(answers, 'handleChangeAnswer answers');
    // console.log(newAnswer, 'handleChangeAnswer newAnswer');
    setAnswer(updatedAnswers);
  };

  /** Меняет состояние поля для редактирования. */
  const handleEdit = (i: number) => {
    if (getAtLeastOnceIsEdit()) {
      setError('Save unsaved changes');
      setTimeout(() => setError(''), 3000);
    } else {
      setIsEdit(true);
      const updatedAnswers = [...answers];
      // if (updatedAnswers[i].isEdit) {
      //   updatedAnswers[i].isEdit = false;
      // } else {
      updatedAnswers[i].isEdit = true;
      // }
      setAnswer(updatedAnswers);
    }
  };

  /** Сохраняет изменения ответа. */
  const handleSave = (i: number, answerId: number) => {
    console.log(i, 'handleSave');
    const updatedAnswers = [...answers];

    if (answers[i].text === '') {
      updatedAnswers[i].isEdit = true;
      updatedAnswers[i].isEmptyOption = true;
    } else {
      updatedAnswers[i].isEdit = false;
      updatedAnswers[i].isEmptyOption = false;
      props.createAnswerAction(answers[answers.length - 1]);
      props.getAllTestsAction();
    }
    setAnswer(updatedAnswers);
  };

  /** Сбрасывает вариант ответа. */
  const handleCancel = (i: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[i].isRight = answers[i].isRight ? answers[i].isRight : false;
    updatedAnswers[i].text = answers[i].text ? answers[i].text : '';
    setAnswer(updatedAnswers);
  };

  /** Удаляет вариант ответа. */
  const handleDelete = (i: number, answerId: number): any => {
    const updatedAnswers = [...answers];
    // if (updatedAnswers[i].isEdit) {
    //   const prevValue = usePrevious(updatedAnswers[i].text);
    //   updatedAnswers[i].isEdit = false;
    //   updatedAnswers.splice(i, 1);
    //   // updatedAnswers[i].text = questions[i].text;
    //   updatedAnswers[i].text = prevValue as string | any;
    // } else {
    //   updatedAnswers[i].isEdit = true;
    // }
    props.deleteAnswerAction(answerId);
    updatedAnswers.splice(i, 1);
    setAnswer(updatedAnswers);
  };

  const renderEdit = (i: number, answerId: number) => {
    return (
      <>
        <Button
          name='edit'
          onClick={() => handleEdit(i)}
          theme='green'
          text='edit'
          size='small'
        />

        <Button
          onClick={() => handleDelete(i, answerId)}
          theme='red'
          text='delete'
          size='small'
        />
      </>
    );
  };

  const renderSave = (i: number, answerId: number) => {
    return (
      <>
        <Button
          disabled={answers[i].disabled}
          name='save'
          onClick={() => handleSave(i, answerId)}
          theme='green'
          text='save'
          size='small'
        />

        <Button
          onClick={() => handleCancel(i)}
          theme='red'
          text='cancel'
          size='small'
        />
      </>
    );
  };

  /** render блока ответов. */
  const answerFormRender = () => {
    if (JSON.stringify(answers[0]) === '{}') return false;

    return answers.map((el, i: any) => {
      return (
        <div key={i} className={s['answer-field']}>
          <RadioButton
            id='radioButton'
            onChange={(event) => handleChangeRadioButton(event, i)}
            extraClass={[s['extra-radio-button']]}
            checked={answers[i].isRight}
          />
          {/* <span>{i}</span> */}

          {el.isEdit ? (
            <Input
              // onBlur={() => onBlurAnswerValidation(i)}
              onChange={(event) => handleChangeAnswer(event, i)}
              value={answers[i].text}
              extraClass={[s['extra-input']]}
              name='versionAnswer'
              placeholder='Enter answer option'
              error={answers[i].isEmptyOption}
              showHint={answers[i].isEmptyOption}
              hint='Enter answer option'
            />
          ) : (
            <span className={s['not-editable-span']}>{answers[i].text}</span>
          )}

          <div className={s['button-block']}>
            {el.isEdit
              ? renderSave(i, el.answerId)
              : renderEdit(i, el.answerId)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={s['test-container']}>
      <Label extraClass={[s['extra-label']]} text='Answer Creation' />
      {error && <ErrorLog text={error} />}
      <div className={s['add-option-btn']}>
        <Button
          // disabled={disabled}
          onClick={handleAddOption}
          text='add option'
          theme='green'
          size='small'
        />
      </div>
      {answerFormRender()}
      {/* <div className={s['action-bar']}>
        <Input
          // onBlur={onBlurTestValidation}
          onChange={handleTitleChange}
          value={answerForm.text}
          placeholder='Enter question title'
        />

        <Button
          disabled={disabled}
          name='edit'
          onClick={handleCreateAnswer}
          theme='green'
          text='create'
          size='small'
        />
      </div> */}
    </div>
  );
};

const mapDispatchToProps = {
  getAllTestsAction,
  createAnswerAction,
  deleteAnswerAction,
  editAnswerAction,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
