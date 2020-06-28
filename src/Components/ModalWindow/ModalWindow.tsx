import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '../Button/Button';
import s from './style.styl';

export interface IModalWindowProps {
  /** Контент окна */
  children: JSX.Element | JSX.Element[];
  /** Состояние открытости окна */
  open: boolean;
  /** Признак наличия кнопки закрытия */
  isButtonClose?: boolean;
  /** Функция обработчик закрытия окна */
  onCloseModal?: () => void;
}

const ModalWindow: React.FunctionComponent<IModalWindowProps> = ({
  children,
  open,
  isButtonClose = false,
  onCloseModal = () => {},
}): JSX.Element | null => {
  const modalElement = useRef<HTMLDivElement>(null);

  const closeModalOnClick = (event: any): void => {
    if (isButtonClose && modalElement.current) {
      (event.target as Node).contains(modalElement.current) && onCloseModal();
    }
  };

  const closeModalOnKeyDown = (event: KeyboardEvent): void => {
    if (isButtonClose && modalElement.current) {
      if (event.keyCode === 27) {
        onCloseModal();
      }
    }
  };

  useEffect((): (() => void) => {
    document.addEventListener('click', closeModalOnClick);
    document.addEventListener('keydown', closeModalOnKeyDown);
    return () => {
      document.removeEventListener('click', closeModalOnClick);
      document.removeEventListener('keydown', closeModalOnKeyDown);
    };
  });

  if (open) {
    return createPortal(
      <div className={s['modal-window']}>
        <div
          onClick={(): void => {
            onCloseModal();
          }}
        />
        <div ref={modalElement} className={s['modal-window-container']}>
          {isButtonClose && (
            <Button
              type='icon'
              iconHeight='25px'
              iconWidth='25px'
              iconName='cancel'
              onClick={onCloseModal}
              extraClass={[s["close-button"]]}
            />
          )}
          {children}
        </div>
      </div>,
      document.body
    );
  }

  return null;
};

export default ModalWindow;
