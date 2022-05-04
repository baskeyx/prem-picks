import styles from './Timer.module.scss';

const Timer = ({ started }) => (
  <div className={styles.timerCon}>
    <div className={`${styles.timer} ${started ? styles.on : null}`}></div>
  </div>
);

export default Timer;
