import { useEffect, useState } from 'react';
import { useFetchAllPrograms } from './useFetchAllPrograms';
import { Category } from '../../types/api/common';

export const useAllCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { data } = useFetchAllPrograms();

  useEffect(() => {
    if (data) {
      const programCategories = data.map((program) => program.category).flat();
      const uniqueCategories: Category[] = [];
      programCategories.forEach((category) => {
        if (!uniqueCategories.find((c) => c.uuid === category.uuid)) {
          uniqueCategories.push(category);
        }
      });
      setCategories(uniqueCategories);
    }
  }, [data]);

  return { categories };
};
