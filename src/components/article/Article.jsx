import Button from '../button/Button'
import styles from './Article.module.css'

function Article({img ,children, siteName}) {
    return ( 
        <div className={styles.container}>
        <section className={styles.right}>
            <img src={img} alt={siteName} />
        </section>
        <section className={styles.left}>
            {children}
            <div>

            <Button link={"tel: 09104536070"}>
                تماس با کارشناس
            </Button>
            </div>

        </section>
            
        </div>
    )
}

export default Article
