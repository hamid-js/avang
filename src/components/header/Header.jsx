import Button from '../button/Button'
import styles from './Header.module.css'

function Header( {siteName ,cityName ,hiroImage}) {
    return (
        <header className={styles.header}>

        <div className={styles.container}>
        <div className={styles.right}>
        <div className={styles.texts}>
            <h1>
            {siteName}
            </h1>
            <h2>
            لوله‌بازکنی ارزان و فوری {cityName}
            </h2>
            <p>
            {siteName}  بیشترین شعبه در همه مناطق {cityName}  است که دارای ارزانترین قیمت به نسبت همکاران می باشد، این امر موجب شده است که مجموعه ما شعب خود را در تمام نقاط افزایش دهد.{siteName} آماده خدمات رسانی فوری در سراسر {cityName} میباشد.

            </p>
            </div>
           <div > <Button link={"tel: 09120390206"}>
                تماس با ما
            </Button></div>
            
        </div>
        <div className={styles.left}>
            <img src={hiroImage} alt={siteName} />
        </div>
            
        </div>
     
        </header>
        
    )
}

export default Header
