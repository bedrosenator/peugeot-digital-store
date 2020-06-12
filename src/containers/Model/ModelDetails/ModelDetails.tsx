import React, { FC } from 'react';
import Price from 'components/Price';
import styles from './ModelDetails.module.scss';
import { useSelector } from 'react-redux';
import {
  getSelectedModelSelector,
  totalPriceSelector
} from 'containers/Model/selectors';

export const ModelDetails: FC = () => {
  const totalPrice = useSelector(totalPriceSelector);
  const { name, trim } = useSelector(getSelectedModelSelector);

  return (
    <div className={styles.modelDetails}>
      <img
        title={name}
        className={styles.image}
        alt={name}
        src={trim.color.imageUrl}
      />
      <div className={styles.name}>
        {name} <span className={styles.trim}>{trim.name}</span>
        <div className={styles.color}>{trim.color.name}</div>
      </div>
      <Price className={styles.price} price={totalPrice} />
    </div>
  )
};
