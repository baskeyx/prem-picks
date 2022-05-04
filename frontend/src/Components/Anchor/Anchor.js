import styles from './Anchor.module.scss';

const Anchor = ({ children, ...props }) => (
  <a className={styles.anchor} {...props}>{children}</a>
);

export default Anchor;
