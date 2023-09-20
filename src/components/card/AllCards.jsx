import Card from "./Card"
import data from "../../data"
function AllCards() {
    return (
       <div>
       {
        data.map((cardData) => (
            <Card  cardData={cardData} key={cardData.id} />
        ))
       }
       </div>
    )
}

export default AllCards
