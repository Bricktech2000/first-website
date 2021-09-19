import React, { Component } from 'react';
import styles from '../styles/Button.module.css';

const Button = (props) => {
  const { background, text } = props;

  return (
    <a
      className={styles.Button}
      style={{ background: background }}
      href={props.link}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default Button;
