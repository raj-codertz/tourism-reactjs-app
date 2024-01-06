import ImgOne from '../assets/dest-1.jpg'
import ImgTwo from '../assets/dest-2.jpg'
import ImgThree from '../assets/dist-3.jpg'
import ImgFour from '../assets/dist-4.jpg'
import './Destination.css'

const Destination = () => {
  return (
    <div className="destination">
        <h1>Popular destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        <div className="first-dest">
           <div className="dest-text">
             <h2>Mount Kilimanjaro</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error rem dolorum esse sequi alias quod quis dignissimos beatae quibusdam nihil qui hic eaque nemo, totam consequuntur reiciendis illum earum unde!</p>
           </div>
           <div className="image">
              <img src={ ImgOne } alt="img" />
              <img src={ ImgTwo } alt="img" />
           </div>
        </div>
    </div>
  )
}

export default Destination