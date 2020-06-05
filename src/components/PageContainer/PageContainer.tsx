import React, { ReactChild } from 'react';
import classnames from 'classnames';
import Loader from 'react-loader-spinner';
import styles from './PageContainer.module.scss';

interface IPageContainerProps {
  loading: boolean,
  children: ReactChild
}

export default function PageContainer({ loading, children }: IPageContainerProps) {
  return (
    <div className={classnames(styles.pageContainer, { [styles.centered]: loading })}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={loading}
      />
      {!loading &&
      <>
        {children}
      </>
      }
    </div>
  );
}