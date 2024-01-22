import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
    <footer className={styles.container}>
      <div className={styles.sectionContainer}>
        <section className={styles.section}>
          <h3 className={styles.title}>خدمات ما</h3>
          <ul className={styles.links}>
          <a href="/" > <li>بهترین مکانیک</li></a> 
          <a href="/">     <li>تعمیرات سیار خودرو</li></a> 
          <a href="/">      <li>تشخیص خرابی خودرو</li></a> 
          <a href="/">      <li>تعویض سیار قطعات</li></a> 
          <a href="/">    <li>شبانه روزی</li></a> 
          </ul>
        </section>
      </div>

    </footer>
    
    </>
  );
}

export default Footer;
