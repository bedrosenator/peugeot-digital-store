import React, { FC } from 'react';
import { ITrim } from 'types/Model';
import containerStyles from 'components/PageContainer/PageContainer.module.scss';
import Trim from './Trim';
import { useHistory } from 'react-router-dom';
import styles from './Trims.module.scss';
import NavPanel from 'components/NavPanel';
import Title from 'components/Title';

type TTrimsProps = {
  trims: ITrim[],
  selectedTrim: ITrim,
}

const Trims: FC<TTrimsProps> = ({ trims, selectedTrim }: TTrimsProps) => {
  const history = useHistory();
  const goToColorsPage = () => {
    history.push('colors');
  };

  return (
    <>
      <div className={styles.trims}>
        <Title text="CHOOSE EQUIPMENT LEVEL" />
        {trims.map((trim) => {
          return <Trim key={trim.name} active={trim.name === selectedTrim.name} trim={trim} />
        })}
      </div>
      <NavPanel handleForward={goToColorsPage} />
    </>
  );
};

export default Trims;
