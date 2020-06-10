import React, { ReactChild } from 'react';
import classnames from 'classnames';
import Loader from 'react-loader-spinner';
import styles from './PageContainer.module.scss';

type TPageContainerProps = {
  loading?: boolean,
  className?: string,
  children: ReactChild
}

export default function PageContainer({ loading = false, children, className }: TPageContainerProps) {
  return (
    <div className={classnames(styles.pageContainer, className, { [styles.centered]: loading })}>
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