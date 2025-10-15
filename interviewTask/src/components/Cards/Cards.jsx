
import './Cards.css';


const Cards = ({ heading, description, icon }) => {
  return (
    <div className='cards'>
      <figure>
        <img src={icon} alt={heading + " icon"} className="card-icon" />
      </figure>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Cards;