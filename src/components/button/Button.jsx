import styles from './Button.module.css'

function Button({children , link="tel: 09120390206"}) {
    return (
        <div className={styles.btnBox}>
        <a  className={styles.btn} href={link}  >
        {children}
        </a>
        </div>
        
    )
}

export default Button
