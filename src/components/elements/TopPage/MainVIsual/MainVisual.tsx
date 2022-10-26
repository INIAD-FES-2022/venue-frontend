import * as styles from './MainVisual.css';

export const MainVisual = () => (
  <div className={styles.mainVisual}>
    <img src="./mainVisual/cloud&sun.svg" className={styles.cloudAndSun} />
    <p className={styles.title}>
      <span>6th</span>
      <br />
      <span className={styles.iniadFes}>INIAD-FES</span>
    </p>
    <div className={styles.logo}>
      <img src="./INIADFES6-LOGO_organized.svg" alt="logo" />
    </div>
  </div>
);
