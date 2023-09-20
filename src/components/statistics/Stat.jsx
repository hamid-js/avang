import React, { useEffect, useState } from 'react';
import styles from './Stat.module.css';

const Stat = ({ data, duration ,subject ,sign , img}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = data;
    const range = end - start;
    let startTime;

    const animationFrame = requestAnimationFrame((timestamp) => {
      startTime = timestamp || new Date().getTime();
      animate(timestamp);
    });

    const animate = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const incrementedCount = Math.floor(progress * range + start);
      setCount(incrementedCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    return () => cancelAnimationFrame(animationFrame);
  }, [data, duration]);

  return (
    <div className={styles.stat}>
    <img src={img} alt="" />
      <div className={styles.count}>
      <span className={styles.countSign}>{sign}</span> {count} </div>
      <h3 className={styles.title}>{subject} </h3>
    </div>
  );
}

export default Stat;
