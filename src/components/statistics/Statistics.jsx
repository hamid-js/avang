import Stat from "./Stat";
import styles from "./Stat.module.css";
function Statistics() {
  return (
    <div className={styles.container}>
    
      <Stat data={27} duration={8000} subject={"سال های تجربه"} sign={"+"} img={"/images/icon2.png"} />

      <Stat data={1600} duration={20000} subject={"خدمات انجام شده"} sign={"✅"} img={"/images/icon4.png"} />

      <Stat data={150} duration={10000} subject={"تعداد متخصص"} sign={"⚙️"} img={"/images/icon7.png"} />

      <Stat data={100} duration={16000} subject={"مشتریان راضی"} sign={"%"} img={"/images/icon8.png"} />

    </div>
  );
}

export default Statistics;
