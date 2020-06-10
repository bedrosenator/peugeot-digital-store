import React, {FC} from 'react';
import Price from 'components/Price';
import {IColor, IModelDetails, ITrim} from 'types/Model';
import styles from './ModelDetails.module.scss';

type TModelDetails = {
  model: IModelDetails,
  selectedTrim: ITrim,
  selectedColor: IColor,
}

export const ModelDetails: FC<TModelDetails> = ({ model, selectedTrim, selectedColor}) => {
  const price = selectedTrim.price + selectedColor.price;
  return (
    <div className={styles.modelDetails}>
      <div className={styles.name}>
        {model.name} <span className={styles.trim}>{selectedTrim.name}</span>
        <div className={styles.color}>{selectedColor.name}</div>
      </div>
      <img
        title={selectedTrim.name}
        className={styles.image}
        alt={selectedColor.name}
        src={selectedColor.imageUrl}
      />
      <Price className={styles.price} price={price} />
    </div>
  )
};

