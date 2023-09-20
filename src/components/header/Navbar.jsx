import Button from '../button/Button'
import styles from './Navbar.module.css'

function Navbar( {siteName}) {
    return (
        <div className={styles.container}>
            <Button link={"https://avangservice.com" } >
           {siteName}
            </Button>
            <Button link={"tel: 09120390206"}>
            بازدید رایگان
            </Button>
        </div>
    )
}

export default Navbar
