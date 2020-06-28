import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import MWTestAction from '../../MWTestAction/MWTestAction';
import ModalWindow from '../../../Components/ModalWindow/ModalWindow';
import s from './ActionBar.styl';

interface IActionBarProps {
  /** Данные редактируемого элемента. */
  data?: any;
  /** Данные ответов */
  dataAnswer?: any;
  /** Признак открытия блока редактирования тестов или ответов. */
  isTest?: boolean;
  /** Признак открытия блока редактирования вопросов. */
  isQuestion?: boolean;
  /** Признак открытия блока редактирования ответов. */
  isAnswer?: boolean;
  /** Признак наличия кнопки редактирования. */
  isEditBtn?: boolean;
  onEditClick?: any;
}

const ActionBar = ({
  data,
  isTest,
  isQuestion,
  isAnswer,
  isEditBtn,
  onEditClick,
}: IActionBarProps) => {
  const [isMWOpen, setIsMWOpen] = useState(false);
  const [removeOrEdit, setRemoveOrEdit] = useState('');

  const handleModalClose = () => {
    setIsMWOpen(!isMWOpen);
  };

  const handleEditEl = () => {
    setRemoveOrEdit('edit');
    handleModalClose();
  };

  const handleRemoveEl = () => {
    setRemoveOrEdit('remove');
    handleModalClose();
  };

  return (
    <div className={s['create-page-actions-panel']}>
      {isEditBtn && (
        <Button
          name='edit'
          type='icon'
          iconName='edit'
          iconColor='gray'
          iconWidth='20px'
          iconHeight='20px'
          onClick={handleEditEl}
        />
      )}

      <Button
        name='remove'
        type='icon'
        iconName='cross'
        iconColor='red'
        iconWidth='20px'
        iconHeight='20px'
        onClick={handleRemoveEl}
      />

      <ModalWindow
        open={isMWOpen}
        isButtonClose={true}
        onCloseModal={handleModalClose}
      >
        <MWTestAction
          isTest={isTest}
          isQuestion={isQuestion}
          action={removeOrEdit}
          onEditClick={onEditClick}
          isAnswer={isAnswer}
          data={data}
          handleCloseMW={handleModalClose}
        />
      </ModalWindow>
    </div>
  );
};
export default ActionBar;
