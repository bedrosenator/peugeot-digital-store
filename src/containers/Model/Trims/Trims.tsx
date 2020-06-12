import React, { FC } from 'react';
import { ITrim } from 'types/Model';
import Trim from './Trim';
import Title from 'components/Title';
import styles from './Trims.module.scss';

type TTrimsProps = {
  trims: ITrim[],
  selectedTrim: ITrim,
}

const Trims: FC<TTrimsProps> = ({ trims, selectedTrim }: TTrimsProps) => {
  return (
    <>
      <div className={styles.trims}>
        <Title text="CHOOSE EQUIPMENT LEVEL" />
        {trims.map((trim) => {
          return <Trim key={trim.name} active={trim.name === selectedTrim.name} trim={trim} />
        })}
      </div>
    </>
  );
};

export default Trims;
