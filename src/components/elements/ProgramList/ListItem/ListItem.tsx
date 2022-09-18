import Image from 'next/image';
import { OmittedProgram as Program } from '../../../../types/api/allPrograms';
import * as styles from './ListItem.css';

export const ListItem = ({ program }: { program: Program }) => {
  const startDate = new Date(program.startAt);
  const endDate = new Date(program.endAt);
  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const startHour = startDate.getHours();
  const startMinute = startDate.getMinutes();
  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();
  const endHour = endDate.getHours();
  const endMinute = endDate.getMinutes();

  return (
    <div className={styles.gridItem}>
      <div className={styles.imageWrapper}>
        <Image src={program.thumbnail} layout="fill" alt={program.title} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{program.title}</h2>
        <div>
          <p>
            {startMonth}月{startDay}日{startHour}:{startMinute}-{endMonth}月
            {endDay}日{endHour}:{endMinute}
          </p>
          <p>{program.place}</p>
        </div>
        <p>{program.group.name}</p>
      </div>
    </div>
  );
};
