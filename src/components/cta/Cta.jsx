import styles from './Cta.module.css'
function Cta() {
    return (
        <div>
        <a href='tel: 09120390206'  target="blank" className={styles.cta} >
        <div className={styles.container}>
            <p>
            برای تماس باما
       <span> کلیک </span>      
            کنید
            </p>
        </div>
        </a>
        </div>
    )
}

export default Cta
