import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import {
  getModelLoaderSelector,
  getModelSelector,
  getSelectedColorSelector,
  getSelectedTrimSelector
} from 'containers/Model/selectors';
import PageContainer from 'components/PageContainer/PageContainer';
import { ITrim, IModelDetails, IColor } from 'types/Model';
import { getModel, checkout } from './actions';
import Trims from './Trims';
import Colors from './Colors';
import ModelDetails from './ModelDetails';
import { Button } from 'components/Button/Button';
import styles from './Model.module.scss';


type TModelParams = {
  id: string,
  action: string
};

function Model({ match: { params: { id, action } } }: RouteComponentProps<TModelParams>) {
  const history = useHistory();
  const model: IModelDetails = useSelector(getModelSelector);
  const selectedTrim: ITrim = useSelector(getSelectedTrimSelector);
  const selectedColor: IColor = useSelector(getSelectedColorSelector);
  const loading: boolean = useSelector(getModelLoaderSelector);
  const dispatch = useDispatch();
  const isColorsPage = action === 'colors';
  const isTrimsPage = action === 'trims';
  const goToColorsPage = () => {
    history.push('colors');
  };

  const handleCheckout = () => {
    dispatch(checkout({ colorName: selectedColor.name, trimName: selectedTrim.name, modelName: model.name }));
  };

  useEffect(() => {
    dispatch(getModel(id))
  }, [dispatch])
  // todo change to selectors
  return (
    <PageContainer loading={loading}>
      {model.name &&
        <div className={styles.model}>
          {selectedTrim.name && <ModelDetails model={model} selectedColor={selectedColor} selectedTrim={selectedTrim} />}
          <div className={styles.modelEquipment}>
            <div className={styles.equipmentSelection}>
              {isTrimsPage && <Trims selectedTrim={selectedTrim} trims={model.trims} />}
              {isColorsPage && <Colors colors={selectedTrim.colors} selectedColor={selectedColor} />}
            </div>
            <div className={styles.navPanel}>
              <Button onClick={history.goBack} variant="back" />
              {isTrimsPage && <Button onClick={goToColorsPage} variant="forward" />}
              {isColorsPage && <Button className={styles.checkoutButton} onClick={handleCheckout}>Proceed</Button>}
            </div>
          </div>
        </div>
      }
    </PageContainer>
  );
}

export default Model;
