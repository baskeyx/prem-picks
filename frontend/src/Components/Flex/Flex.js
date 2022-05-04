import styles from './Flex.module.scss';

const Flex = ({ children, theme }) => (
  <div className={`${styles.flex} ${styles[theme]}`}>
    {children}
  </div>
);

export default Flex;
