import { BiLink } from 'react-icons/bi';
import { useFetchNotice } from '../../../../hooks/api/useFetchNotice';
import { Accordion } from '../Accordion/Accordion';
import * as styles from './NoticeContent.css';

export const NoticeContent = ({ uuid }: { uuid: string }) => {
  const { data: notice } = useFetchNotice(uuid);
  const rem = parseInt(getComputedStyle(document.documentElement).fontSize, 10);

  const format = (date: string) => {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const hour = d.getHours().toString().padStart(2, '0');
    const minute = d.getMinutes().toString().padStart(2, '0');

    return `${month}月${day}日 ${hour}:${minute}`;
  };

  if (notice) {
    return (
      <div>
        <Accordion title={notice.title}>
          <p className={styles.content}>{notice.content}</p>
          {notice.relatedUrl.length > 0 && (
            <ul className="mb-5">
              {notice.relatedUrl.map((link, index) => (
                <li key={index}>
                  <a href={link} className={styles.withIcon}>
                    <BiLink size={rem} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Accordion>
        <p>{format(notice.date)}</p>
      </div>
    );
  }

  return null;
};
