import Image from 'next/image';
import { Terminal } from '../../../common/terminal/Terminal';
import { OmittedProgram as Program } from '../../../../types/api/allPrograms';
import * as styles from './ListItem.css';

export const ListItem = ({ program }: { program: Program }) => {
  const startDate = new Date(program.startAt);
  const endDate = new Date(program.endAt);
  const Day = startDate.getDate();
  const startHour = startDate.getHours();
  const startMinute = startDate.getMinutes();
  const endHour = endDate.getHours();
  const endMinute = endDate.getMinutes();

  return (
    <Terminal barTitle={program.title}>
      <div className={styles.gridItem}>
        <div className={styles.imageWrapper}>
          <Image src={program.thumbnail} layout="fill" alt={program.title} />
        </div>
        <div className={styles.info}>
          <div className={styles.description}>
            <p className={styles.caption}>企画名</p>
            <p className={styles.title}>{program.title}</p>
          </div>
          <div className={styles.partition}>
            <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
            <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
            <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
          </div>
          <div className={styles.description}>
            <p className={styles.caption}>場所</p>
            <p className={styles.descriptionText}>{program.place}</p>
          </div>
          <div className={styles.partition}>
            <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
            <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
            <Image src="/sakura.svg" alt="sakura" height={12} width={12} />
          </div>
          <div className={styles.description}>
            <p className={styles.caption}>日時</p>
            <p className={styles.descriptionText}>
              神無月{Day === 29 ? '弐拾玖' : '三拾'}日<br />
              {startHour}:{startMinute}～{endHour}:{endMinute}
            </p>
          </div>
        </div>
      </div>
    </Terminal>
  );
};
