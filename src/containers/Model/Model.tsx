import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  getModelLoaderSelector,
  getModelSelector,
  getSelectedColorSelector,
  getSelectedTrimSelector
} from 'containers/Model/selectors';
import PageContainer from 'components/PageContainer/PageContainer';
import { ITrim, IModelDetails, IColor } from 'types/Model';
import { getModel } from './actions';
import Trims from './Trims';
import Colors from './Colors';
import ModelDetails from './ModelDetails';
import styles from './Model.module.scss';


type TModelParams = {
  id: string,
  action: string
};

function Model({ match: { params: { id, action } } }: RouteComponentProps<TModelParams>) {
  const model: IModelDetails = useSelector(getModelSelector);
  const selectedTrim: ITrim = useSelector(getSelectedTrimSelector);
  const selectedColor: IColor = useSelector(getSelectedColorSelector);
  const loading: boolean = useSelector(getModelLoaderSelector);
  const dispatch = useDispatch();
  const isColorsPage = action === 'colors';
  const isTrimsPage = action === 'trims';

  useEffect(() => {
    dispatch(getModel(id))
  }, [dispatch])

  return (
    <PageContainer loading={loading}>
      {model.name &&
        <div className={styles.model}>
          {selectedTrim.name && <div className={styles.modelDetails}>
            <ModelDetails model={model} selectedColor={selectedColor} selectedTrim={selectedTrim} />
          </div>}
          <div className={styles.modelEquipment}>
            {isTrimsPage && <Trims selectedTrim={selectedTrim} trims={model.trims} />}
            {isColorsPage && <Colors selectedTrim={selectedTrim} model={model} colors={selectedTrim.colors} selectedColor={selectedColor} />}
          </div>
        </div>
      }
    </PageContainer>
  );
}

export default Model;
