import React, { FC } from 'react';
import { ITrim } from 'types/Model';
import containerStyles from 'components/PageContainer/PageContainer.module.scss';
import Trim from './Trim';
import styles from './Trims.module.scss';

type TTrimsProps = {
  trims: ITrim[],
  selectedTrim: ITrim,
}

const Trims: FC<TTrimsProps> = ({ trims, selectedTrim }: TTrimsProps) => {
  return (
    <div className={styles.trims}>
      <div className={containerStyles.title}>CHOOSE EQUIPMENT LEVEL</div>
      {trims.map((trim) => {
        return <Trim key={trim.name} active={trim.name === selectedTrim.name} trim={trim} />
      })}
    </div>
  );
};

export default Trims;
