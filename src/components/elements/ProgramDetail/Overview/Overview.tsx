import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineClock } from 'react-icons/hi';
import { Response } from '../../../../types/api/program';
import * as styles from './Overview.css';
import * as common from '../common.css';

export const Overview = ({ data }: { data: Response | undefined }) => {
  if (data) {
    const startDate = new Date(data.startAt);
    const endDate = new Date(data.endAt);
    const startMonth = startDate.getMonth() + 1;
    const startDay = startDate.getDate();
    const startHour = startDate.getHours();
    const startMinute = startDate.getMinutes();
    const endMonth = endDate.getMonth() + 1;
    const endDay = endDate.getDate();
    const endHour = endDate.getHours();
    const endMinute = endDate.getMinutes();

    const rem = parseInt(
      getComputedStyle(document.documentElement).fontSize,
      10,
    );

    return (
      <div className={styles.overview}>
        <div className={styles.thumbnailWrapper}>
          <div className={styles.thumbnail}>
            <Image src={data.thumbnail} alt={data.title} layout="fill" />
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <p className={styles.category}>
              {data.category.map((el) => (
                <span key={el.uuid}>{el.name}</span>
              ))}
            </p>
            <h1 className={styles.title}>{data.title}</h1>
          </div>
          <div>
            <p className={common.withIcon}>
              <HiOutlineClock size={rem} />
              {startMonth}月{startDay}日{startHour}:{startMinute}-{endMonth}月
              {endDay}日{endHour}:{endMinute}
            </p>
            <p className={common.withIcon}>
              <GrLocation size={rem} />
              {data.place}
            </p>
          </div>
          <p>{data.group.name}</p>
        </div>
      </div>
    );
  }

  return null;
};
