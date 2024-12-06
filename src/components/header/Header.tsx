import { Link } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles['header-content']}>
      <Link to="/products" className={styles['text-link']}>
        Карточки товара
      </Link>
      <Link to="/create-products" className={styles['text-link']}>
        Создать карточку
      </Link>
    </header>
  );
};

export default Header;
