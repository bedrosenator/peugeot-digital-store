import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Price from 'components/Price';
import styles from './ModelsListItem.module.scss';
import { TModel } from 'types/Model';

type IModelsListItemProps = TModel;

const ModelsListItem: FC<IModelsListItemProps> = ({ name, code, imageUrl, priceFrom }) => {
  return (
    <Link to={`/models/${code}/trim`} className={styles.list}>
      <img alt={name} className={styles.image} src={imageUrl} />
      <div className={styles.description}>
        <div className={styles.title}>{name}</div>
        <Price className={styles.price} price={priceFrom}/>
      </div>
    </Link>
  );
}

export default ModelsListItem;
