import React, { FC } from 'react';
import ModelsListItem from 'containers/Models/ModelsList/ModelsListItem';
import { IModel } from 'types/Model';
import styles from './ModelsList.module.scss';

type TModelsListProps = {
  models: IModel[],
};

const ModelsList: FC<TModelsListProps> = ({ models }) => {
  return (
    <div className={styles.modelsList}>
      {models.length && models.map((model) => <ModelsListItem key={model.code} {...model} /> )}
    </div>
  );
}

export default ModelsList;
