import * as styles from './MainVisual.css';
import { url } from '../../../../util/config';

export const MainVisual = () => (
  <div className={styles.mainVisual}>
    <img
      src={url('/mainVisual/cloud&sun.svg')}
      className={styles.cloudAndSun}
    />
    <p className={styles.title}>
      <span>6th</span>
      <br />
      <span className={styles.iniadFes}>INIAD-FES</span>
    </p>
    <div className={styles.logo}>
      <img src={url('/INIADFES6-LOGO_organized.svg')} alt="logo" />
    </div>
  </div>
);
