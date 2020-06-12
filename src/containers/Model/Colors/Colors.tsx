import React, { FC } from 'react';
import { IColor, ITrim } from 'types/Model';
import Color from './Color';
import styles from './Colors.module.scss';
import Title from 'components/Title';

type TColorsProps = {
  colors: IColor[],
  selectedColor: IColor,
};

const Colors: FC<TColorsProps> = ({ colors, selectedColor}: TColorsProps) => {
  return (
    <div className={styles.colors}>
      <Title className={styles.title} text="SELECT COLOR" />
      <div className={styles.colorsList}>
        {colors.map((color) => <Color key={color.name} color={color} isActive={selectedColor.name === color.name} />) }
      </div>
    </div>
  );
};

export default Colors;
