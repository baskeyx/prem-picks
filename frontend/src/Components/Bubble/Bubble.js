import styles from './Bubble.module.scss';

const Bubble = ({ children, theme }) => (
  <div className={`${styles.bubble} ${styles[theme]}`}>
    {children}
  </div>
);

export default Bubble;
