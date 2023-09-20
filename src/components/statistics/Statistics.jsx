import Stat from "./Stat";
import styles from "./Stat.module.css";
const duration = 3000;
function Statistics() {
  return (
    <div className={styles.container}>
    
      <Stat data={25} duration={duration} subject={"سال های تجربه"} sign={"+"} img={"./assets/icon2.png"} />

      <Stat data={1500} duration={duration} subject={"خدمات انجام شده"} sign={"✅"} img={"./assets/2.png"} />

      <Stat data={150} duration={duration} subject={"تعداد متخصص"} sign={"⚙️"} img={"./assets/icon7.png"} />

      <Stat data={100} duration={duration} subject={"مشتریان راضی"} sign={"%"} img={"./assets/icon4.png"} />

    </div>
  );
}

export default Statistics;
