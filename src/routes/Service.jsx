import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
// importing an img for service
import Img3 from '../assets/3.jpg'

const Service = () => {
  return (
    <>
       <Navbar />
       <Hero 
         cName = "hero-about"
         heroImg = { Img3 }
        //  title = "Our Service"
         btnClass="hide"
       />
       <Trip />
       <Footer />
    </>
  )
}

export default Service