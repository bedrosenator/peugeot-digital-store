import React, {FC} from 'react';
import { ITrim } from 'types/Model';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Price from 'components/Price';
import { Button } from 'components/Button/Button';
import { setActiveTrim } from 'containers/Model/actions';
import styles from 'containers/Model/Trims/Trim/Trim.module.scss';

interface ITrimProps {
  trim: ITrim,
  active?: boolean,
}

const Trim: FC<ITrimProps> = ({ trim, active }: ITrimProps) => {
  const dispatch = useDispatch();
  const handleTrimSelect = (trim: ITrim): void => {
    dispatch(setActiveTrim(trim))
  }

  return (
    <Button
      onClick={() => handleTrimSelect(trim)}
      className={classNames(styles.priceModelButton, { [styles.active]: active })}
      variant="outlined"
    >
      <>
        <div className={styles.name}>{trim.name}</div>
        <Price className={styles.price} price={trim.price} />
      </>
    </Button>
  );
}

export default Trim;
