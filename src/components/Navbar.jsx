import './Navbar.css'
import { Menu } from './Menu'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='logo'>ANATASOV SAFARI</h1>
        <ul className='menu'>
          { Menu.map((item, index)=> {
            return (
                <li key={ index }>
                  <a className={ item.cName } href={ item.url }>
                    <i className={ item.icon }></i>{ item.title }
                  </a>
              </li>
            )
          })}
          <button>Sign up</button>
        </ul>
    </nav>
  )
}

export default Navbar