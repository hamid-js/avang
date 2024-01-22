import Card from "./Card"
import data from "../../data"
import styles from "./Card.module.css";

function AllCards() {
    return (
       <div className= {styles.cardBox}>
       {
        data.map((cardData) => (
            <Card  cardData={cardData} key={cardData.id} />
        ))
       }
       </div>
    )
}

export default AllCards
