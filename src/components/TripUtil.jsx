import './Trip.css'

const TripUtil = (props) => {
  return (
    <div className="card">
        <div className="img">
            <img src={ props.image } alt="img" />
        </div>
        <h4>{ props.heading }</h4>
        <p>{ props.text }</p>
    </div>
  )
}

export default TripUtil