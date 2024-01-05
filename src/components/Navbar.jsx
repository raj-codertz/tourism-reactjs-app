import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='logo'></h1>
        <ul className='menu'>
            <li>
                <a href='/'>
                  <i className="fa-solid fa-house"></i>Home
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar