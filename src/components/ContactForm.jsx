import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="form">
        <h1>Send us a message</h1>
        <form>
           <input placeholder='Name' />
           <input placeholder='Name' />
           <input placeholder='Name' />
           <textarea placeholder="Message" rows="4"></textarea>
           <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm