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
    const startDay = startDate.getDate();
    const startHour = startDate.getHours().toString().padStart(2, '0');
    const startMinute = startDate.getMinutes().toString().padStart(2, '0');
    const endHour = endDate.getHours().toString().padStart(2, '0');
    const endMinute = endDate.getMinutes().toString().padStart(2, '0');

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
            <h1 className={styles.title}>{data.title}</h1>
            <p>{data.group.name}</p>
          </div>
          <div>
            <p>{`対面 ${data.isFace2Face ? '◯' : '✕'}`}</p>
            <p>{`オンライン ${data.isOnline ? '◯' : '✕'}`}</p>
          </div>

          <div>
            {data.startAt && data.endAt && (
              <p className={common.withIcon}>
                <HiOutlineClock size={rem} />
                {startDay}日 {startHour}:{startMinute}-{endHour}:{endMinute}
              </p>
            )}
            {data.place && (
              <p className={common.withIcon}>
                <GrLocation size={rem} />
                {data.place}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
