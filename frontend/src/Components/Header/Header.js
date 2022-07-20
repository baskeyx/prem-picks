import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} src='https://teamsupreme.s3.eu-west-2.amazonaws.com/public/STRIPCLUB.webp' alt='Strip Club' />
  </header>
);

export default Header;
