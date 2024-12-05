import styles from './filterBoard.module.scss';

const FilterBoard = () => {
  return (
    <div className={styles['board-content']}>
      <input type="text" placeholder="Поиск..." className={styles['search-input']} />

      <div className={styles['toggle-section']}>
        <label className={styles['toggle-label']}>
          <input type="radio" name="view" value="all" defaultChecked />
          Все товары
        </label>
        <label className={styles['toggle-label']}>
          <input type="radio" name="view" value="favorites" />
          Избранное
        </label>
      </div>

      <div className={styles['checkbox-section']}>
        <label className={styles['checkbox-label']}>
          <input type="checkbox" />
          Фильтр 1
        </label>
        <label className={styles['checkbox-label']}>
          <input type="checkbox" />
          Фильтр 2
        </label>
        <label className={styles['checkbox-label']}>
          <input type="checkbox" />
          Фильтр 3
        </label>
      </div>
    </div>
  );
};

export default FilterBoard;
