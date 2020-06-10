import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import Price from 'components/Price';
import { IColor } from 'types/Model';
import { setActiveColor } from 'containers/Model/actions'
import styles from './Color.module.scss';

type TColorProps = {
  color: IColor,
  isActive: boolean,
}

const Color: FC<TColorProps> = ({ color, isActive }: TColorProps) => {
  const dispatch = useDispatch();
  const setColor = () => {
    dispatch(setActiveColor(color));
  };
  return (
    <div onClick={setColor} className={styles.color}>
      <img className={classnames(styles.colorIcon, { [styles.active]: isActive })} alt={color.name} src={color.iconUrl} />
      <div className={styles.name}>
        {color.name}
      </div>
      {color.price === 0
        ? <div className={styles.price}>Standard</div>
        : <Price className={styles.price} price={color.price} />
      }
    </div>
  );
};

export default Color;
