import React from 'react';
import classnames from 'classnames';
import { utils } from 'utils';
import styles from './Price.module.scss';

interface IPrice {
  price: number | string,
  className?: string,
}

export default function Price({ price, className }: IPrice) {
  return (
    <div className={classnames(styles.price, className)}>{utils.formatPrice(Number(price))}</div>
  );
}
