import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import contact from '../assets/4.jpg'


const Contact = () => {
  return (
    <>
      <Navbar />
     <Hero 
       cName = "hero-about"
       heroImg = { contact }
      //  title = "Contact Us"
       btnClass="hide"
     />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact