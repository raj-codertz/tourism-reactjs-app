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
             text = "Embark on an exhilarating journey to the summit of Anatasov's majestic peaks. Our expert guides and state-of-the-art equipment ensure a safe and thrilling mountain climbing experience. Whether you're a seasoned mountaineer or a first-time adventurer, our carefully curated routes promise breathtaking views and unforgettable memories. Conquer the heights with us and let the awe-inspiring landscapes of Anatasov become the backdrop to your personal triumph."  
         />
          <TripUtil 
             image = { Travel }
             heading = "Travel from one place to another"
             text = "Experience hassle-free travel across the captivating landscapes of Anatasov. Our transportation services are designed to make your journey seamless and enjoyable. Whether you prefer the scenic route by road or the convenience of air travel, we've got your transportation needs covered. Relax and relish the scenic beauty as we take care of the logistics, ensuring you reach each destination comfortably and on time. Your adventure awaits; let us be your guide in traversing the wonders of Anatasov."    
         />
          <TripUtil 
             image = { Hotel }
             heading = "Hotel booking"
             text = "Indulge in the epitome of comfort and luxury with our seamless hotel booking services. From charming boutique accommodations to lavish resorts, we offer a curated selection of handpicked establishments that guarantee a delightful stay. Immerse yourself in Anatasov's hospitality, where every hotel is a home away from home. Let us handle the details, so you can focus on creating cherished moments in the heart of this enchanting destination." 
         />
         
        </div>
    </div>
  )
}

export default Trip;