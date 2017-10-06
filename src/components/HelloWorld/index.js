import React from "react";

import styles from "./index.module.css";

const HelloWorld = () => (
  <div className={styles.root}>
    <h1 className={styles.heading}>Hello,</h1>
    <h2 className={styles.subHeading}>world<span>!</span></h2>
  </div>
);

export default HelloWorld;
