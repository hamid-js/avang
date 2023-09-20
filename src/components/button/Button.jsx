import styles from './Button.module.css'

function Button({children , link}) {
    return (
        <div className={styles.btnBox}>
        <a  className={styles.btn} href={link}  target="blank"  >
        {children}
        </a>
        </div>
        
    )
}

export default Button
