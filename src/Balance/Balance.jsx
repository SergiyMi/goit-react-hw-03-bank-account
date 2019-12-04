import React from 'react';

import styles from './Balance.module.css';

const Balance = ({ transactions, balance, income, expenses }) => {
  return (
    <section className={styles.balance}>
      <span>⬆️{transactions.length > 0 ? income : 0}$</span>
      <span>⬇️{transactions.length > 0 ? expenses : 0}$</span>
      <span>Balance: {transactions.length > 0 ? balance : 0}$</span>
    </section>
  );
};

export default Balance;
