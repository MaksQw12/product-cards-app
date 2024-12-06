import styles from './filterBoard.module.scss';
import { useProductStore } from '../../store/ProductStore';
import { useState, useEffect } from 'react';

const FilterBoard = () => {
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { setSearchQuery, filterType, setFilterType, setPage } = useProductStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(debouncedQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedQuery, setSearchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType(e.target.value);
    setPage(1);
  };
  return (
    <div className={styles['board-content']}>
      <input
        type="text"
        placeholder="Поиск..."
        className={styles['search-input']}
        value={debouncedQuery}
        onChange={handleSearchChange}
      />

      <div className={styles['toggle-section']}>
        <label className={styles['toggle-label']}>
          <input
            type="radio"
            name="view"
            value="all"
            checked={filterType === 'all'}
            onChange={handleFilterChange}
          />
          Все товары
        </label>
        <label className={styles['toggle-label']}>
          <input
            type="radio"
            name="view"
            value="favorites"
            checked={filterType === 'favorites'}
            onChange={handleFilterChange}
          />
          Избранное
        </label>
      </div>
    </div>
  );
};

export default FilterBoard;
