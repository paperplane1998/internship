import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div>
      { <h1 className={styles.title}>Page index</h1> }
      <h1>Welcome to Umi</h1>
    </div>
  );
}
