import React from 'react';
import ModelsListItem from 'components/ModelsList/ModelsListItem';
import { TModel, TModelsList } from 'containers/Models/reducer';
import styles from './ModelsList.module.scss';

function ModelsList(props: TModelsList) {
  const { data } = props;
  console.log(' models => ', data);

  return (
    <div className={styles.modelsList}>
      {data && data.map((model) => <ModelsListItem key={model.code} {...model} /> )}
    </div>
  );
}

export default ModelsList;
