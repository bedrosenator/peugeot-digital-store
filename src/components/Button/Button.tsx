import React, { FunctionComponent, ReactChild } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type TButton = {
  className?: string,
  children: ReactChild,
  type?: string,
  onClick?: () => void
}

export const Button: FunctionComponent<TButton> = ({ children, className, onClick }: TButton) => {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)}>{children}</button>
  );
};
