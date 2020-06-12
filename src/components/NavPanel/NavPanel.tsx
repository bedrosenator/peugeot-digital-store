import React, { FC, ReactElement } from 'react';
import styles from './NavPanel.module.scss';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

type TNavPanelProps = {
  handleForward?: () => void,
  handleCheckout?: () => void,
  children: ReactElement,
}

export const NavPanel: FC<TNavPanelProps> = ({ handleForward, handleCheckout , children}) => {
  const history = useHistory();

  return (
    <div className={styles.navPanel}>
      {children}
      <div className={styles.navigation}>
        <Button onClick={history.goBack} variant="back" />
        {handleForward && <Button onClick={handleForward} variant="forward" />}
        {handleCheckout && <Button className={styles.checkoutButton} onClick={handleCheckout}>Proceed</Button>}
      </div>
    </div>
  );
};

