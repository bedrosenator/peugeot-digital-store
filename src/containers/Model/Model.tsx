import React, {FC, FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  getModelLoaderSelector,
  getModelSelector,
  getSelectedTrimSelector
} from 'containers/Model/selectors';
import {getModel, setActiveTrim} from './actions';
import PageContainer from 'components/PageContainer/PageContainer';
import styles from './Model.module.scss';
import {ITrim, IModelDetails} from 'types/Model';
import Price from 'components/Price';
import {Button} from 'components/Button/Button';
import classNames from 'classnames';
import Trim from './Trims/Trim';
import Trims from './Trims';
import Colors from './Colors';

type TModelParams = {
  id: string,
  action: string
};

function Model(props: RouteComponentProps<TModelParams>) {
  // const [isTrimActive, setTrim] = useState(false);
  const model: IModelDetails = useSelector(getModelSelector);
  const selectedTrim: ITrim = useSelector(getSelectedTrimSelector);
  const loading: boolean = useSelector(getModelLoaderSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    debugger
    dispatch(getModel(props.match.params.id))
  }, [dispatch])

  const handleTrimClick = (trim: ITrim): void => {
    dispatch(setActiveTrim(trim))
  }

  return (
    <PageContainer loading={loading}>
      {model.name &&
        <div className={styles.model}>
          {selectedTrim.name &&
            <div className={styles.modelDetails}>
              <div className={styles.name}>
                {model.name} <span className={styles.trim}>{selectedTrim.name}</span>
                <div className={styles.color}>{selectedTrim.colors[0].name}</div>
              </div>
              <img title={selectedTrim.colors[0].name} className={styles.image} alt={selectedTrim.colors[0].name} src={selectedTrim.colors[0].imageUrl}/>
              <Price className={styles.price} price={selectedTrim.price}/>
            </div>
          }
          <div className={styles.modelEquipment}>
            <div className={styles.title}>CHOOSE EQUIPMENT LEVEL</div>
            {props.match.params.action === 'trim' ? <Trims selectedTrim={selectedTrim} trims={model.trims} /> : <Colors colors={selectedTrim.colors} />}
          </div>
        </div>
      }
    </PageContainer>
  );
}

export default Model;
