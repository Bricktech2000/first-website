import React, { Component } from 'react';
import styles from '../styles/Button.module.css';

const Button = (props) => {
  const { background, text } = props;

  return (
    <div className={styles.Button} style={{ background: background }}>
      {text}
    </div>
  );
};

export default Button;
