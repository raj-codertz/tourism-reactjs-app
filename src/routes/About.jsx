import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
// importing an img for about 
import Img2 from '../assets/2.jpg'

const About = () => {
  return (
    <>
     <Navbar />
     <Hero 
       cName = "hero-about"
       heroImg = { Img2 }
      //  title = "About Us"
       btnClass="hide"
     />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About