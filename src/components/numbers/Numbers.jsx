import Button from "../button/Button";
import styles from "./Numbers.module.css";
function Numbers({ number, cityName }) {
  return (
    <div className={styles.container}>
      <h2>لوله بازکنی در همه مناطق {cityName}</h2>
      <Button link={"tel: 09120390206"}>مدیریت تمام شعب</Button>
      <h3>{number}</h3>

      <div className={styles.areaButton}>
        <div className={styles.area}>
          <Button link={"tel: 02122919030"} small={true}>
            شمال {cityName}
          </Button>
          <Button link={"tel: 02155900040"}>غرب {cityName}</Button>
        </div>
        <div className={styles.area}>
          <Button link={"tel: 09120390206"}>جنوب {cityName}</Button>
          <Button link={"tel: 02133474030"}>مرکز {cityName}</Button>
        </div>
        <div className={styles.area}>
          <Button link={"tel: 02177725020"}>شرق {cityName}</Button>
          <Button link={"tel: 09104536070"}>حومه {cityName} </Button>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
