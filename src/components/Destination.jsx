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
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit numquam, suscipit odio voluptatum pariatur voluptatibus voluptatem, molestias dolorum similique eos quasi delectus. Laudantium, sed modi ullam numquam pariatur voluptatem voluptate, culpa consectetur, nesciunt vel distinctio. Neque sapiente quod placeat enim cum vel tenetur incidunt corporis iusto veniam asperiores repudiandae nemo quidem eveniet quam sint mollitia ullam doloribus, animi omnis quos porro facilis? Et nulla animi ducimus, excepturi veritatis obcaecati placeat dolores rem explicabo fugit atque recusandae provident voluptate repellendus quidem, ex, ipsum blanditiis deserunt! Quis quidem illum voluptatibus debitis incidunt, est sint culpa consectetur, excepturi ab nisi itaque blanditiis minus!"
            img1 = {ImgOne }
            img2 = { ImgTwo }
        />
        <DestinationUtils 
            class= "reverse"
            heading = "Serengeti National Park"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit numquam, suscipit odio voluptatum pariatur voluptatibus voluptatem, molestias dolorum similique eos quasi delectus. Laudantium, sed modi ullam numquam pariatur voluptatem voluptate, culpa consectetur, nesciunt vel distinctio. Neque sapiente quod placeat enim cum vel tenetur incidunt corporis iusto veniam asperiores repudiandae nemo quidem eveniet quam sint mollitia ullam doloribus, animi omnis quos porro facilis? Et nulla animi ducimus, excepturi veritatis obcaecati placeat dolores rem explicabo fugit atque recusandae provident voluptate repellendus quidem, ex, ipsum blanditiis deserunt! Quis quidem illum voluptatibus debitis incidunt, est sint culpa consectetur, excepturi ab nisi itaque blanditiis minus!"
            img1 = {ImgThree }
            img2 = { ImgFour }
        />
    </div>
  )
}

export default Destination