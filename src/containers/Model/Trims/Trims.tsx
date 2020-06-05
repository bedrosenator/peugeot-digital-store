import React, { FC } from 'react';
import { ITrim } from 'types/Model';
import Trim from './Trim';

type TTrimsProps = {
  trims: ITrim[],
  selectedTrim: ITrim,
}

const Trims: FC<TTrimsProps> = ({ trims, selectedTrim }: TTrimsProps) => {
  return (
    <>
      {trims.map((trim) => {
        return <Trim key={trim.name} active={trim.name === selectedTrim.name} trim={trim} />
      })}
    </>
  );
};

export default Trims;
