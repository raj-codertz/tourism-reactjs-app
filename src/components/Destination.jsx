import ImgOne from '../assets/dest-1.jpg'
import ImgTwo from '../assets/dest-2.jpg'
import ImgThree from '../assets/dist-3.jpg'
import ImgFour from '../assets/dist-4.jpg'
import './Destination.css'
import DestinationUtils from './DestinationUtil'

const Destination = () => {
  return (
    <div className="destination">
        <h1>Popular destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        <DestinationUtils 
            class= "first-dest"
            heading = "Mount Kilimanjaro"
            text = "Embark on the ultimate adventure with our Mount Kilimanjaro expedition. Towering majestically on the Tanzanian horizon, Kilimanjaro offers a once-in-a-lifetime trekking experience. Our expert guides will lead you through diverse ecosystems, from lush rainforests to alpine deserts, culminating in a sunrise summit above the clouds. Conquer Africa's highest peak and bask in the glory of an achievement that will stay with you forever. Let the awe-inspiring beauty of Kilimanjaro become the backdrop to your most unforgettable journey."
            img1 = {ImgOne }
            img2 = { ImgTwo }
        />
        <DestinationUtils 
            class= "reverse"
            heading = "Serengeti National Park"
            text = "Step into the untamed beauty of the Serengeti with our exclusive safari experiences. Witness the world-famous Great Migration, where vast herds of wildebeest and zebras roam freely across the expansive plains. Our guided safaris promise an up-close encounter with Africa's diverse wildlife, from majestic lions to graceful giraffes. Immerse yourself in the rhythm of the wilderness, staying in carefully selected accommodations that blend luxury with the raw beauty of nature. Join us on a Serengeti safari and create timeless memories in the heart of the African savannah."
            img1 = {ImgThree }
            img2 = { ImgFour }
        />
    </div>
  )
}

export default Destination