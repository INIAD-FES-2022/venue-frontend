import React from 'react';
import Link from 'next/link';
import { useFetchAllNotices } from '../../../../hooks/api/useFetchAllNotices';
import * as styles from './TopPageAnnouncement.css';
import { Response } from '../../../../types/api/allNotices';

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
          const year = date.getUTCFullYear();
          const month = date.getUTCMonth() + 1;
          const days = date.getUTCDate();
          const hours = date.getUTCHours();
          const minutes = date.getUTCMinutes();

          return (
            <Link href="/notice/" key={notice.uuid}>
              <button type="button" className={styles.content}>
                <p
                  className={styles.date}
                >{`${month}/${days} ${hours}:${minutes}`}</p>
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
