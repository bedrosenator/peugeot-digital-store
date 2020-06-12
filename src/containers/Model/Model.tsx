import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import {
  checkoutModelSelector,
  getModelLoaderSelector,
  getModelSelector,
  getSelectedColorSelector,
  getSelectedTrimSelector
} from 'containers/Model/selectors';
import PageContainer from 'components/PageContainer/PageContainer';
import { ITrim, IModelDetails, IColor, ICheckoutModel } from 'types/Model';
import { checkout, getModel } from './actions';
import Colors from './Colors';
import ModelDetails from './ModelDetails';
import styles from './Model.module.scss';
import NavPanel from 'components/NavPanel';
import Trims from './Trims';

type TModelParams = {
  id: string,
  step: string
};

function Model({ match: { params: { id, step } } }: RouteComponentProps<TModelParams>) {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkoutModel: ICheckoutModel = useSelector(checkoutModelSelector);
  const model: IModelDetails = useSelector(getModelSelector);
  const selectedTrim: ITrim = useSelector(getSelectedTrimSelector);
  const selectedColor: IColor = useSelector(getSelectedColorSelector);
  const loading: boolean = useSelector(getModelLoaderSelector);
  const goToColorsPage = (): void => history.push('colors');

  const handleCheckout = () => {
    dispatch(checkout(checkoutModel));
  };

  useEffect(() => {
    dispatch(getModel(id))
  }, [dispatch]);

  return (
    <PageContainer className={styles.model} loading={loading}>
      <>
        <div className={styles.modelDetails}>
          <ModelDetails />
        </div>
        <div className={styles.modelEquipment}>
          {step === 'trims' &&
            <NavPanel handleForward={goToColorsPage}>
              <Trims trims={model.trims} selectedTrim={selectedTrim} />
            </NavPanel>}
          {step === 'colors' &&
            <NavPanel handleCheckout={handleCheckout}>
              <Colors colors={selectedTrim.colors} selectedColor={selectedColor} />
            </NavPanel>}
        </div>
      </>
    </PageContainer>
  );
}

export default Model;
