import AddLink from "./AddLink";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
    <footer className={styles.container}>
      <div className={styles.sectionContainer}>
        <section className={styles.section}>
          <h3 className={styles.title}>خدمات ما</h3>
          <ul className={styles.links}>
          <a href="/" > <li>لوله بازکنی</li></a> 
          <a href="/">     <li>تخلیه چاه</li></a> 
          <a href="/">      <li>تشخیص ترکیدگی لوله</li></a> 
          <a href="/">      <li>تعویض روشویی</li></a> 
          <a href="/">    <li>درآوردن اشیا ارزشمند از چاه</li></a> 
          </ul>
        </section>
      </div>
      
    </footer>
    
    </>
  );
}

export default Footer;
