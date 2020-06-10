import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import ModelsList from 'containers/Models/ModelsList';
import { getModelsSelector } from 'containers/Models/selectors';
import PageContainer from 'components/PageContainer/PageContainer';
import { getModels } from './actions';
import styles from './Models.module.scss';

const Models: FC = () => {
  const models = useSelector(getModelsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModels())
  }, [dispatch])

  return (
    <PageContainer loading={models.loading}>
      <div className={classnames(styles.models)}>
        {!models.loading &&
          <>
            <div className={styles.title}>CHOOSE YOUR NEW CAR</div>
            <ModelsList models={models.data} />
          </>
        }
      </div>
    </PageContainer>
  );
}

export default Models;
