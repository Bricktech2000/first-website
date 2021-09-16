import React, { Component } from 'react';
import styles from '../styles/Button.module.css';

const Button = (props) => {
  const { background } = props;

  return (
    <div className={styles.Button} style={{ background: background }}>
      Button
    </div>
  );
};

export default Button;
