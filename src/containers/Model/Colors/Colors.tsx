import React, { FC } from 'react';
import {IColor, ITrim} from 'types/Model';
import Color from './Color';
import { checkout } from 'containers/Model/actions';
import { useDispatch } from 'react-redux';
import { IModelDetails } from 'types/Model';
import NavPanel from 'components/NavPanel';
import styles from './Colors.module.scss';
import Title from 'components/Title';

type TColorsProps = {
  colors: IColor[],
  selectedColor: IColor,
  selectedTrim: ITrim,
  model: IModelDetails,
};

const Colors: FC<TColorsProps> = ({ colors, selectedColor, selectedTrim, model }: TColorsProps) => {
  const dispatch = useDispatch();
  const handleCheckout = () => {
    dispatch(checkout({ colorName: selectedColor.name, trimName: selectedTrim.name, modelName: model.name }));
  };
  return (
    <>
      <Title className={styles.title} text="SELECT COLOR" />
      <div className={styles.colors}>
        {colors.map((color) => <Color key={color.name} color={color} isActive={selectedColor.name === color.name} />) }
      </div>
      <NavPanel handleForward={handleCheckout} />
    </>
  );
};

export default Colors;
