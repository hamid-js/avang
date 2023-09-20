import styles from './Button.module.css'

function Button({children}) {
    return (
        <div className={styles.btnBox}>
        <a href='tel: 09120390206'  target="blank" className={styles.btn} >
        {children}
        </a>
        </div>
        
    )
}

export default Button
