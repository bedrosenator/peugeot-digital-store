import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import ModelsList from 'containers/Models/ModelsList';
import { selectModels, selectModelsLoader } from 'containers/Models/selectors';
import PageContainer from 'components/PageContainer/PageContainer';
import { Title } from 'components/Title/Title';
import { getModels } from './actions';
import styles from './Models.module.scss';

const Models: FC = () => {
  const models = useSelector(selectModels);
  const loading = useSelector(selectModelsLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModels())
  }, [dispatch])

  return (
    <PageContainer loading={loading}>
      <div className={classnames(styles.models)}>
        <Title className={styles.title} text="CHOOSE YOUR NEW CAR" />
        <ModelsList models={models} />
      </div>
    </PageContainer>
  );
}

export default Models;
