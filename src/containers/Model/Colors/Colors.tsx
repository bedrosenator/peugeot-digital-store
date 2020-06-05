import React, { FC } from 'react';
import {IColor, IModelDetails, ITrim} from 'types/Model';
import Color from './Color';
import { useSelector } from 'react-redux';
import { getSelectedColorSelector } from '../selectors';

type TColorsProps = { colors: IColor[] };

const Colors: FC<TColorsProps> = (props: TColorsProps) => {
  // const colors: IColor[] = [];
  // const colors: IColor[] = useSelector(getColorsSelector);
  // const selectedColor: IColor = {};
  // const selectedColor: IColor = useSelector(getSelectedColorSelector);
  debugger
  return (
    <>
      aaaa{/*{colors.map((color) => <Color color={color} isActive={selectedColor.name === color.name} />) }*/}
    </>
  );
};

export default Colors;
