import { useState } from 'react';
import { useFetchAllPrograms } from '../../../hooks/api/useFetchAllPrograms';
import { useAllCategories } from '../../../hooks/api/useAllCategories';
import { QueryParams } from '../../../types/api/allPrograms';
import { ListItem } from './ListItem/ListItem';
import * as styles from './ProgramList.css';

export const ProgramList = () => {
  const [query, setQuery] = useState<QueryParams>({});
  const { data } = useFetchAllPrograms(query);
  const { categories } = useAllCategories();

  return (
    <div className={styles.container}>
      <div className={styles.querySelectors}>
        <div className={styles.querySelector}>
          <div>
            <p>カテゴリー</p>
            <select
              className={styles.selector}
              name="category"
              id="category"
              onChange={(e) => {
                setQuery((q) => {
                  if (e.target.value === 'all') {
                    const { category: _, ...newQuery } = q; // eslint-disable-line

                    return newQuery;
                  }

                  return { ...q, category: e.target.value };
                });
              }}
            >
              <option value="all">すべて</option>
              {categories.map((category) => (
                <option value={category.uuid} key={category.uuid}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.querySelector}>
          <div>
            <p>ソート</p>
            <select
              className={styles.selector}
              name="sort"
              id="sort"
              onChange={(e) => {
                setQuery((q) => ({
                  ...q,
                  'sort-by': e.target.value as QueryParams['sort-by'],
                }));
              }}
            >
              <option value="startAt">開始時間</option>
              <option value="endAt">終了時間</option>
              <option value="title">タイトル</option>
              <option value="group">グループ</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.gridWrapper}>
        <div className={styles.gridContainer}>
          {data?.map((program) => (
            <ListItem key={program.uuid} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};
