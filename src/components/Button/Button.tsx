import React, { FunctionComponent, ReactChild } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ReactComponent as BackIcon } from 'components/Button/icons/arrow_back.svg';
import { ReactComponent as ForwardIcon } from 'components/Button/icons/arrow_forward.svg';

type TButton = {
  className?: string,
  children?: ReactChild,
  type?: string,
  variant?: string,
  onClick?: () => void
}

const TYPES = {
  back: 'back',
  forward: 'forward',
  regular: 'regular',
};

export const Button: FunctionComponent<TButton> = ({ children, className, onClick, variant = TYPES.regular }: TButton) => {
  return (
    <button onClick={onClick} className={classNames(className, styles.button, {
      [styles.back]: variant === TYPES.back,
      [styles.forward]: variant === TYPES.forward,
      [styles.regular]: variant === TYPES.regular,
    })}>
      {variant === TYPES.back && <BackIcon />}
      {variant === TYPES.forward && <ForwardIcon />}
      {children}
    </button>
  );
};
