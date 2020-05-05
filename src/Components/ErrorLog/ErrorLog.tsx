import React from 'react';
import './ErrorLog.css';

interface IErrorLogProps {
  /** Текст ошибки. */
  text?: string;
  /** Признак отображения текста */
  showError?: boolean;
}

const ErrorLog: React.FunctionComponent<IErrorLogProps> = ({ text, showError }): JSX.Element | any => {
  return showError && <span className='error-log-container'>{text}</span>;
};

export default ErrorLog;
