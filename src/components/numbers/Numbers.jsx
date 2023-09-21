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
          <p className={styles.btnNumber}>22-91-9030</p>

          <Button link={"tel:09104536070 "}>غرب {cityName}</Button>
          <p className={styles.btnNumber}>910-453-6070</p>
          </div>

        <div className={styles.area}>
          <Button link={"tel: 02155900040"}>جنوب {cityName}</Button>
          <p className={styles.btnNumber}>55-90-0040</p>

          <Button link={"tel: 02133474030"}>مرکز {cityName}</Button>
          <p className={styles.btnNumber}>33-47-4030</p>

        </div>
        
        <div className={styles.area}>
          <Button link={"tel: 02177725020"}>شرق {cityName}</Button>
          <p className={styles.btnNumber}>77-72-5020</p>


          <Button link={"tel: 09104536070"}>حومه {cityName} </Button>
          <p className={styles.btnNumber}>910-453-6070</p>

        </div>

        
      </div>
    </div>
  );
}

export default Numbers;
