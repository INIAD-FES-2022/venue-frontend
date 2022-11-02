import React from 'react';
import Link from 'next/link';
import { useFetchAllNotices } from '../../../../hooks/api/useFetchAllNotices';
import * as styles from './TopPageAnnouncement.css';

export const TopPageAnnouncement = () => {
  const { data } = useFetchAllNotices({
    'sort-by': 'date',
  });

  return (
    <div className={styles.container}>
      {/* <h2 className={styles.caption}>お知らせ</h2> */}
      <div className={styles.list}>
        {data?.slice(0, 4).map((notice) => {
          const date = new Date(Date.parse(notice.date));
          const month = date.getUTCMonth() + 1;
          const days = date.getUTCDate();

          return (
            <Link href="/notice/" key={notice.uuid}>
              <button type="button" className={styles.content}>
                <p className={styles.date}>{`${month}/${days}`}</p>
                <p className={styles.title}>{notice.title}</p>
              </button>
            </Link>
          );
        })}
      </div>
      <Link href="/notice/">
        <button type="button" className={`${styles.browseMore}`}>
          &gt; もっと見る &lt;
        </button>
      </Link>
    </div>
  );
};
