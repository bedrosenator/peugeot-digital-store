import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PageContainer from 'components/PageContainer/PageContainer';
import { CHECKOUT_STATUS } from 'containers/Model/constants';
import { ReactComponent as Success } from './icons/success.svg';
import { ReactComponent as Error } from './icons/error.svg';
import styles from './Checkout.module.scss';

type TCheckoutProps = {
  status: string,
};

export function Checkout({ match: { params: { status } } }: RouteComponentProps<TCheckoutProps>) {
  return (
    <PageContainer className={styles.checkout}>
      {status === CHECKOUT_STATUS.SUCCESS ? <Success /> : <Error />}
    </PageContainer>
  );
}
