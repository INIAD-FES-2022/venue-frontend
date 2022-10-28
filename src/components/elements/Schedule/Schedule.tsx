import { scheduleStyle } from './Schedule.css';
import { url } from '../../../util/config';

export const Schedule = () => (
  <div>
    <img
      className={scheduleStyle.img}
      src={url('/iniadhall-schedule.png')}
      alt="timeTable"
    />
  </div>
);
