import React, { useRef, useEffect } from 'react';
import Button from '../../../Components/Button/Button';


/**
 * Свойства компонента CancelOrRemoveButton.
 */
export interface ICancelOrRemoveButtonProps {
  /** disabled компонента CancelOrRemoveButton. */
  disabled?: boolean;
  /** el */
  el?: any;
  /**  */
  i?: number;
  /**  */
  questions?: any;
  /**  */
  setQuestion?: any;
  /** */
  onChange?: any
}

/**
 * Компонент CancelOrRemoveButton.
 */
function CancelOrRemoveButton(el: any, i: any, questions: any, setQuestion: any) {

  function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  
  /** Удаляет поле ответа или отменяет изменения ответа. */
  const handleDeleteQuestion = (i: number) => {
    if (questions.length === 1) return false;
    const updatedQuestions = [...questions];
    if (updatedQuestions[i].isEdit) {
      const prevValue = usePrevious(updatedQuestions[i].versionAnswer);
      updatedQuestions[i].isEdit = false;
      // updatedQuestions.splice(i, 1);
      updatedQuestions[i].versionAnswer = prevValue as string | any;
      console.log(0);
    } else {
      updatedQuestions[i].isEdit = true;
      console.log(1);
    }
    updatedQuestions.splice(i, 1);
    setQuestion(updatedQuestions);
  };

  return (
    <Button
      onClick={() => handleDeleteQuestion(i)}
      theme='red'
      text={el.isEdit ? 'cancel' : 'delete'}
      // text={el.isEdit ? 'cancel' : 'delete'}
      type='icon'
    />
  );
};

export default CancelOrRemoveButton;
