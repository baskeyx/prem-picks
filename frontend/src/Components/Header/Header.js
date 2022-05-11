import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} src='https://bucketeer-fc372a20-7c59-4eff-9882-cfa444a1cba6.s3.amazonaws.com/public/prem_logo.png' alt='Premier League' />
  </header>
);

export default Header;
