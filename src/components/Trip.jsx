import './Trip.css'
import TripUtil from './TripUtil.jsx'
import Climb from '../assets/climb.jpg'
import Travel from '../assets/travel.jpg'
import Hotel from '../assets/hotel.jpg'

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nulla?</p>
        <div className="tripCard">
         <TripUtil 
             image = { Climb }
             heading = "Mountain climbing"
             text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut repellat dignissimos doloribus quo pariatur nihil, fuga culpa nisi odio similique distinctio esse atque nobis, sit, vitae recusandae consectetur assumenda magnam tempora temporibus blanditiis alias dolore? Voluptate blanditiis laboriosam corporis dignissimos quo quaerat, ullam officia, inventore tempora tenetur ex quae non, qui eaque distinctio adipisci quod neque voluptatem? Hic obcaecati dolor aliquam omnis? Corporis illum repellat non ratione porro dolorem sunt quo quod animi perspiciatis, sit molestiae officiis necessitatibus impedit, placeat voluptatibus exercitationem asperiores? Non quia iste ad. Necessitatibus adipisci rem sequi provident, maxime eaque ducimus ipsa facere architecto!"     
         />
          <TripUtil 
             image = { Travel }
             heading = "Travel from one place to another"
             text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut repellat dignissimos doloribus quo pariatur nihil, fuga culpa nisi odio similique distinctio esse atque nobis, sit, vitae recusandae consectetur assumenda magnam tempora temporibus blanditiis alias dolore? Voluptate blanditiis laboriosam corporis dignissimos quo quaerat, ullam officia, inventore tempora tenetur ex quae non, qui eaque distinctio adipisci quod neque voluptatem? Hic obcaecati dolor aliquam omnis? Corporis illum repellat non ratione porro dolorem sunt quo quod animi perspiciatis, sit molestiae officiis necessitatibus impedit, placeat voluptatibus exercitationem asperiores? Non quia iste ad. Necessitatibus adipisci rem sequi provident, maxime eaque ducimus ipsa facere architecto!"     
         />
          <TripUtil 
             image = { Hotel }
             heading = "Hotel booking"
             text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id aut repellat dignissimos doloribus quo pariatur nihil, fuga culpa nisi odio similique distinctio esse atque nobis, sit, vitae recusandae consectetur assumenda magnam tempora temporibus blanditiis alias dolore? Voluptate blanditiis laboriosam corporis dignissimos quo quaerat, ullam officia, inventore tempora tenetur ex quae non, qui eaque distinctio adipisci quod neque voluptatem? Hic obcaecati dolor aliquam omnis? Corporis illum repellat non ratione porro dolorem sunt quo quod animi perspiciatis, sit molestiae officiis necessitatibus impedit, placeat voluptatibus exercitationem asperiores? Non quia iste ad. Necessitatibus adipisci rem sequi provident, maxime eaque ducimus ipsa facere architecto!"     
         />
         
        </div>
    </div>
  )
}

export default Trip;