import { useFetchAllPrograms } from '../../../hooks/api/useFetchAllPrograms';
import { ListItem } from './ListItem/ListItem';
import * as styles from './ProgramList.css';

export const ProgramList = () => {
  const { data } = useFetchAllPrograms();

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>企画一覧</h1>
      <div className={styles.gridWrapper}>
        <div className={styles.gridContainer}>
          {data?.map((program) => (
            <ListItem key={program.uuid} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};
