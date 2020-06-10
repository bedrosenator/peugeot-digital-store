import React, { FC } from 'react';
import style from './Title.module.scss';
import classnames from 'classnames';

type TTitleProps = {
  text: string,
  className?: string,
}

export const Title: FC<TTitleProps> = ({ text, className }) => {
  return (
    <div className={classnames(style.title, className)}>{text}</div>
  );
};
