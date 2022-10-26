import { useState } from 'react';
import { useFetchAllPrograms } from '../../../hooks/api/useFetchAllPrograms';
import { useAllCategories } from '../../../hooks/api/useAllCategories';
import { QueryParams, Select } from '../../../types/api/allPrograms';
import { ListItem } from './ListItem/ListItem';
import * as styles from './ProgramList.css';

const time = (day: number, hour: number): string => {
  const start = hour;
  const end = hour + 2;

  return `2022-10-${day}T${start}:00:00+09:00,2022-10-${day}T${end}:00:00+09:00`;
};

export const ProgramList = () => {
  const [query, setQuery] = useState<QueryParams>({});
  const [select, setSelect] = useState<Select>({});
  const { data } = useFetchAllPrograms(query, select);
  const { categories } = useAllCategories();

  return (
    <div className={styles.container}>
      <div className={styles.querySelectors}>
        <div className={styles.querySelector}>
          <div>
            <p>時間帯</p>
            <select
              className={styles.selector}
              name="time"
              id="time"
              onChange={(e) => {
                if (e.target.value === 'all') {
                  setSelect((prev) => ({ place: prev.place }));

                  return;
                }

                const times = e.target.value.split(',');
                const start = times[0];
                const end = times[1];
                setSelect((prev) => ({
                  ...prev,
                  startTime: start,
                  endTime: end,
                }));
              }}
            >
              <option value="all">すべて</option>
              <option value={time(29, 10)}>29日10時-12時</option>
              <option value={time(29, 12)}>29日12時-14時</option>
              <option value={time(29, 14)}>29日14時-16時</option>
              <option value={time(29, 16)}>29日16時-18時</option>
              <option value={time(30, 10)}>30日10時-12時</option>
              <option value={time(30, 12)}>30日12時-14時</option>
              <option value={time(30, 14)}>30日14時-16時</option>
              <option value={time(30, 16)}>30日16時-18時</option>
            </select>
          </div>
          <div>
            <p>場所</p>
            <select
              className={styles.selector}
              name="from"
              id="from"
              onChange={(e) => {
                setSelect((prev) => ({
                  ...prev,
                  place: e.target.value as Select['place'],
                }));
              }}
            >
              <option value="all">すべて</option>
              <option value="hybrid">ハイブリッド</option>
              <option value="online">オンライン</option>
              <option value="offline">対面</option>
            </select>
          </div>
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
