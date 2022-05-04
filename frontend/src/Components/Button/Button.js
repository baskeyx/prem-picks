import styles from './Button.module.scss';

const Button = ({ children, theme, ...props }) => (
  <button className={`${styles.button} ${styles[theme]}`} {...props}>{children}</button>
);

export default Button;
