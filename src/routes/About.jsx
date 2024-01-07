import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
// importing an img for about 

const About = () => {
  return (
    <>
     <Navbar />
     <Hero 
       cName = "hero-about"
       heroImg = "https://images.unsplash.com/photo-1635865897833-38bc0f8aee44?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       title = "About Us"
       btnClass="hide"
     />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About