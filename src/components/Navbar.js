import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <div className={styles.home}>home</div>
        <div className={styles.about}>about</div>
        <div className={styles.projects}>projects</div>
        <div className={styles.achievements}>achievements</div>
        <div className={styles.events}>events</div>
        <div className={styles.team}>team</div>
        <div className={styles.contacts}>contacts</div>
        <div className={styles.login}>
          <div className={styles.text}>login</div>
        </div>
      </div>
      <div className={styles.rig}>rig</div>
      <div className={styles.toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
    </div>
    
    
  );
}

export default Navbar;
