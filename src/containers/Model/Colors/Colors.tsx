import React, { FC } from 'react';
import { IColor } from 'types/Model';
import Color from './Color';
import styles from './Colors.module.scss';

type TColorsProps = {
  colors: IColor[],
  selectedColor: IColor,
};

const Colors: FC<TColorsProps> = ({ colors, selectedColor }: TColorsProps) => {
  return (
    <div className={styles.colors}>
      {colors.map((color) => <Color key={color.name} color={color} isActive={selectedColor.name === color.name} />) }
    </div>
  );
};

export default Colors;
