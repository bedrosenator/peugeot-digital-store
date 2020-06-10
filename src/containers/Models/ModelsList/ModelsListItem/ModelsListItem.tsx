import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Price from 'components/Price';
import styles from './ModelsListItem.module.scss';
import { IModel } from 'types/Model';

type IModelsListItemProps = IModel;

const ModelsListItem: FC<IModelsListItemProps> = ({ name, code, imageUrl, priceFrom }) => {
  return (
    <Link to={`/models/${code}/trims`} className={styles.modelItem}>
      <img alt={name} className={styles.image} src={imageUrl} />
      <div className={styles.description}>
        <div className={styles.title}>{name}</div>
        <Price className={styles.price} price={priceFrom}/>
      </div>
    </Link>
  );
}

export default ModelsListItem;
