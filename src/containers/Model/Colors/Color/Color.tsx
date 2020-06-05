import React, { FC } from 'react';
import { IColor } from 'types/Model';
import Price from '../../../../components/Price';

type TColorProps = {
  color: IColor,
  isActive: boolean,
}

const Color: FC<TColorProps> = ({ color, isActive }: TColorProps) => {
  return (
    <div>
      <img alt={color.name} src={color.iconUrl} />
      <div>
        {color.name}
        <div>
          {color.price === 0
            ? "Standard"
            : <Price price={color.price} />
          }
        </div>
      </div>
    </div>
  );
};

export default Color;
