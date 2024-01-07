// Write your code here.
import './index.css'

const TechnologiesElement = props => {
  const {technologyItems} = props
  const {title, description, imgUrl, className} = technologyItems

  return (
    <li className={`technology-card ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default TechnologiesElement
