import Button from '../button/Button'
import styles from './Article.module.css'

function Article({img ,children}) {
    return ( 
        <div className={styles.container}>
        <section className={styles.right}>
            <img src={img} alt="" />
        </section>
        <section className={styles.left}>
            {children}
            <div>

            <Button>
                تماس با کارشناس
            </Button>
            </div>

        </section>
            
        </div>
    )
}

export default Article
