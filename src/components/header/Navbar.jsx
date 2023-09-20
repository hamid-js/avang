import Button from '../button/Button'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <Button>
           تماس باما
            </Button>
            <Button>
            بازدید رایگان
            </Button>
        </div>
    )
}

export default Navbar
