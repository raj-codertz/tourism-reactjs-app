import { Component } from "react";
import './Navbar.css'
import { Menu } from './Menu'
import { Link } from "react-router-dom";


class Navbar extends Component {
 state= { clicked: false }

 handleClick = () => {
    this.setState( { clicked: !this.state.clicked })
 }
  render() {
    return (
        <nav className='navbar'>
            <h1 className='logo'>ANATASOV SAFARI</h1>
            <div className='hambuger' onClick={ this.handleClick }>
               <i className={ this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            <ul className={ this.state.clicked ? "menu active" : "menu"}>
              { Menu.map((item, index)=> {
                return (
                    <li key={ index }>
                      <Link className={ item.cName } to={ item.url }>
                        <i className={ item.icon }></i>{ item.title }
                      </Link>
                  </li>
                )
              })}
              <button>Sign up</button>
            </ul>
        </nav>
      )
  }
}

export default Navbar;