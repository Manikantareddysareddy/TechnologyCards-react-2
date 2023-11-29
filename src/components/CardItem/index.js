import './index.css'

const TechnologyCards = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails
  return (
    <div className="bg-container">
      <li className={className}>
        <h1 className="heading">{title}</h1>
        <p className="desc">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </li>
    </div>
  )
}
export default TechnologyCards
