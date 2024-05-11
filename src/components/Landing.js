import React from 'react';
import styles from './landing.module.css';

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.box}></div>
      <div className={styles.hero}>
        <div className={styles.right}>
            <div className={styles.text}>latest news....
            <hr></hr>
            </div>
            
        </div>
      </div>
        
      
    </div>
    
    
  );
}

export default Landing;
