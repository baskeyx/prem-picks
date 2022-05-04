import styles from './Heading.module.scss';

const Heading = ({ Type, children }) => (
  <Type className={styles.heading}>{children}</Type>
);

export default Heading;
