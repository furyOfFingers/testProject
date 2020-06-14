import React from 'react';
import s from './ErrorLog.styl';

interface IErrorLogProps {
  /** Текст ошибки. */
  text?: string;
}

const ErrorLog: React.FunctionComponent<IErrorLogProps> = ({
  text,
}): JSX.Element | any => {
  return text && <span className={s['error-log-container']}>{text}</span>;
};

export default ErrorLog;
