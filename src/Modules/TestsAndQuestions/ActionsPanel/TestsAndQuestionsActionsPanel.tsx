import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import MWTestAction from '../../MWTestAction/MWTestAction';
import ModalWindow from '../../../Components/ModalWindow/ModalWindow';
import s from './TestsAndQuestionsActionsPanel.styl';

interface ITestsAndQuestionsActionsPanelProps {
  /** Данные теста или вопроса переданные на обработку. */
  data: any;
  /** Признак редактирования теста или вопроса. */
  isTest?: boolean;
  /** Признак открытия блока редактирования ответов. */
  isAnswerOpen?: boolean;
}

const TestsAndQuestionsActionsPanel = ({
  data,
  isTest,
  isAnswerOpen,
  ...props
}: ITestsAndQuestionsActionsPanelProps) => {
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
      <Button
        name='edit'
        type='icon'
        iconName='edit'
        iconColor='gray'
        iconWidth='20px'
        iconHeight='20px'
        onClick={handleEditEl}
      />

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
          action={removeOrEdit}
          data={data}
          handleCloseMW={handleModalClose}
          isAnswerOpen={isAnswerOpen}
        />
      </ModalWindow>
    </div>
  );
};
export default TestsAndQuestionsActionsPanel;
