import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
             <div>
                <h1>ANATASOV SAFARI</h1>
                <p>Choose Your Favourites Destination</p>
             </div>
             <div>
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                    <i className='fa-brands fa-instagram-square'></i>
                    <i className='fa-brands fa-whatsapp-square'></i>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
             </div>
        </div>
        <div className="bottom">
           <div>
            <h4>Project</h4>
            <a href="/">changelog</a>
            <a href="/">Status</a>
            <a href="/">LIcense</a>
            <a href="/">All versions</a>
           </div>
           <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
           </div>
           <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact us</a>
           </div>
           <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy</a>
            <a href="/">POlicy</a>
            <a href="/">License</a>
           </div>
        </div>
    </div>
  )
}

export default Footer