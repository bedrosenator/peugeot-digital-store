import React, { FC } from 'react';
import styles from './NavPanel.module.scss';
import {Button} from '../Button/Button';
import {useHistory} from 'react-router-dom';

type TNavPanelProps = {
  handleForward?: () => void,
  handleCheckout?: () => void
}

export const NavPanel: FC<TNavPanelProps> = ({ handleForward, handleCheckout }) => {
  const history = useHistory();

  return (
    <div className={styles.navPanel}>
      <Button onClick={history.goBack} variant="back" />
      {handleForward && <Button onClick={handleForward} variant="forward" />}
      {handleCheckout && <Button className={styles.checkoutButton} onClick={handleCheckout}>Proceed</Button>}
    </div>
  );
};
