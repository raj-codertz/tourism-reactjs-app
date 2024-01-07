import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'
import Img1 from '../assets/1.jpg'

const Home = () => {
  return (
    <>
      <Navbar />
     <Hero 
       cName = "hero"
       heroImg = {Img1 }
       title = "Discover the Enchanting Beauty of Anatasov"
       text = "Welcome to Anatasov, where every moment is a journey and every step is an adventure. Immerse yourself in the rich tapestry of our culture, explore breathtaking landscapes, and indulge in unforgettable experiences. "
       btnText= "Travel Plan"
       url="/"
       btnClass="show"
     />
     <Destination />
     <Trip />
     <Footer />
    </>
  )
}
export default Home