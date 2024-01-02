import styles from "./Footer.module.css";

function AddLink() {
  return (
    <div className={styles.ads}>
      <section className={styles.adsSection}>
        <a href="tel:09371355148"  target="blank"> تماس با طراح سایت</a>
      </section>

      <section className={styles.adsSection}>
        <a href="tel:09371355148" target="blank">سفارش طراحی  سایت</a>
      </section>
    </div>
  );
}

export default AddLink;
