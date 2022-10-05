import * as styles from './MainVisual.css';

export const MainVisual = () => (
  <div className={styles.mainVisual}>
    <img src="./mainVisual/sun01.svg" className={styles.sun} />
    <img src="./mainVisual/cloud01.svg" className={styles.cloud} />
    <p className={styles.title}>
      <span>6th</span>
      <br />
      <span className={styles.iniadFes}>INIAD-FES</span>
    </p>
    <div className={styles.logo}>
      <img src="./iniadfes6-logo.svg" alt="logo" />
      <p>令和4年10月29-30日</p>
    </div>
  </div>
);
