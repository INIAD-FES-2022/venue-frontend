import { useEffect, useState } from 'react';
import { useFetchAllPrograms } from '../../../hooks/api/useFetchAllPrograms';
import { useAllCategories } from '../../../hooks/api/useAllCategories';
import { QueryParams } from '../../../types/api/allPrograms';
import { ListItem } from './ListItem/ListItem';
import * as styles from './ProgramList.css';

export const ProgramList = () => {
  const [query, setQuery] = useState<QueryParams>({});
  const { categories } = useAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] =
    useState<QueryParams['sort-by']>('startAt');
  const { data } = useFetchAllPrograms(query);

  useEffect(() => {
    if (selectedCategory) {
      setQuery({ 'category': selectedCategory, 'sort-by': selectedSort });
    } else {
      setQuery({ 'sort-by': selectedSort });
    }
  }, [selectedCategory, selectedSort]);

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>企画一覧</h1>
      <div className={styles.querySelector}>
        <div>
          <p>カテゴリー</p>
          <select
            name="category"
            id="category"
            onChange={(e) => {
              setSelectedCategory(
                e.target.value === 'all' ? null : e.target.value,
              );
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
        <div>
          <p>ソート</p>
          <select
            name="sort"
            id="sort"
            onChange={(e) => {
              setSelectedSort(e.target.value as QueryParams['sort-by']);
            }}
          >
            <option value="startAt">開始時間</option>
            <option value="endAt">終了時間</option>
            <option value="title">タイトル</option>
            <option value="group">グループ</option>
          </select>
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
