import { useState } from 'react';
import { BiLink } from 'react-icons/bi';
import { IoIosArrowUp } from 'react-icons/io';
import { useFetchAllNotices } from '../../../hooks/api/useFetchAllNotices';
import { useFetchNotice } from '../../../hooks/api/useFetchNotice';
import * as styles from './NoticeList.css';

const Accordion = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.AccordionWrapper}>
      <div
        className={`${styles.AccordionStyle} ${
          isOpen ? '' : styles.closeStyle
        }`}
      >
        {children}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={styles.accordionToggle}
      >
        <IoIosArrowUp
          size={30}
          className={`${styles.openArrow} ${!isOpen ? '' : styles.closeArrow}`}
        />
      </button>
    </div>
  );
};

const NoticeContent = ({ uuid }: { uuid: string }) => {
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
        <Accordion>
          <p className={styles.noticeContent}>{notice.content}</p>
          <ul>
            {notice.relatedUrl.map((link, index) => (
              <li key={index}>
                <a href={link} className={styles.withIcon}>
                  <BiLink size={rem} />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </Accordion>
        <p>{format(notice.date)}</p>
      </div>
    );
  }

  return null;
};

export const NoticeList = () => {
  const { data } = useFetchAllNotices({
    'sort-by': 'date',
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>お知らせ一覧</h1>
      <div className={styles.noticeList}>
        {data?.map((notice) => (
          <div key={notice.uuid} className={styles.noticeItem}>
            <p>
              {notice.category.map((el) => (
                <span key={el.uuid}>{el.name}</span>
              ))}
            </p>
            <h2 className={styles.title}>{notice.title}</h2>
            {notice && <NoticeContent uuid={notice.uuid} />}
          </div>
        ))}
      </div>
    </div>
  );
};
