import { useEffect } from 'react';

const Interval = ({ setView, setTimer }) => {
  useEffect(() => {
    let currentTime = 5;
    setTimer(5);
    const interval = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(interval);
        setView(1);
      } else {
        currentTime -= 1;
        setTimer(currentTime);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
    </>
  );
};

export default Interval;
