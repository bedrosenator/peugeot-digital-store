import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import ModelsList from 'components/ModelsList';
import styles from './Models.module.scss';
import { getModels } from './actions';
import { getModelsSelector } from 'containers/Models/selectors';
import PageContainer from 'components/PageContainer/PageContainer';

const Models = (props: object) => {
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
            <ModelsList data={models.data} />
          </>
        }
      </div>
    </PageContainer>
  );
}

export default Models;