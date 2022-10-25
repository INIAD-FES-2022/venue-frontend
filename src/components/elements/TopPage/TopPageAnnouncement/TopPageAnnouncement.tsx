import React from 'react';
import { useFetchAllNotices } from '../../../../hooks/api/useFetchAllNotices';
import * as styles from './TopPageAnnouncement.css';

export const TopPageAnnouncement = () => {
  const { data } = useFetchAllNotices({
    'sort-by': 'date',
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.caption}>お知らせ</h2>
      {data?.map((notice) => (
        <div key={notice.uuid} className={styles.content}>
          <h2 className={styles.title}>{notice.title}</h2>
        </div>
      ))}
    </div>
  );
};
