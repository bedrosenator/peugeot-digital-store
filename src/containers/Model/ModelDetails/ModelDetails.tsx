import React, { FC } from 'react';
import Price from 'components/Price';
import styles from './ModelDetails.module.scss';
import { useSelector } from 'react-redux';
import {
  selectActiveModel,
  selectTotalPrice
} from 'containers/Model/selectors';

export const ModelDetails: FC = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const { name, trim } = useSelector(selectActiveModel);

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
