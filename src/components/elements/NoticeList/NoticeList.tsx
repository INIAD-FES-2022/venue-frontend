import { useFetchAllNotices } from '../../../hooks/api/useFetchAllNotices';
import { NoticeContent } from './NoticeContent/NoticeContent';
import * as styles from './NoticeList.css';

export const NoticeList = () => {
  const { data } = useFetchAllNotices({
    'sort-by': 'date',
  });

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {data?.map((notice) => (
          <div key={notice.uuid} className={styles.noticeItem}>
            <p className={styles.category}>
              {notice.category.map((el) => (
                <span key={el.uuid}>{el.name}</span>
              ))}
            </p>
            {notice && <NoticeContent uuid={notice.uuid} />}
          </div>
        ))}
      </div>
    </div>
  );
};
