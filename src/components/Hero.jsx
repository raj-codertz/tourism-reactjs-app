import './Hero'
const Hero = () => {
  return (
       <>
         <div className="heroImg">
            <img alt="hero" src="https://images.unsplash.com/photo-1631646109206-4b5616964f84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className='hero-text'>
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourites Destination</p>
                <a href="/">
                    Travel Plan
                </a>
            </div>
         </div>
       </>
  )
}

export default Hero