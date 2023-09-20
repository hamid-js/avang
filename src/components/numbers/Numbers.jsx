import Button from "../button/Button";
import styles from "./Numbers.module.css";
function Numbers({ number, cityName }) {
  return (
    <div className={styles.container}>
      <h2>لوله بازکنی در همه مناطق {cityName}</h2>
      <Button>مدیریت تمام شعب</Button>
      <h3>{number}</h3>

      <div className={styles.smallBtn}>
        <div className={styles.btnBox}>
          <Button small={true}>شمال {cityName}</Button>
          <Button>غرب {cityName}</Button>
        </div>
        <div className={styles.btnBox}>
          <Button>جنوب {cityName}</Button>
          <Button>مرکز {cityName}</Button>
        </div>
        <div className={styles.btnBox}>
          <Button>شرق {cityName}</Button>
          <Button>حومه {cityName} </Button>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
