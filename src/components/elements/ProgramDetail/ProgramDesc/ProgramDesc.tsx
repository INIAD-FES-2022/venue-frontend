import { Response } from '../../../../types/api/program';
import * as styles from './ProgramDesc.css';

export const ProgramDesc = ({ data }: { data: Response | undefined }) => {
  if (data) {
    return (
      <div className={styles.programDesc}>
        <h2 className={styles.caption}>企画説明</h2>
        <p>{data.description}</p>
      </div>
    );
  }

  return null;
};
