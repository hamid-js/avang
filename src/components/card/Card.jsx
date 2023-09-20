import Button from "../button/Button";
import styles from "./Card.module.css";
function Card({ cardData }) {
  return (
    <div className={styles.container}>
      <img src={cardData.image} alt={cardData.title} />
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
      
        <Button>
        {cardData.btnText}
         </Button>
      
    </div>
  );
}

export default Card;
