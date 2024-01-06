import { Component } from "react";
import './Navbar.css'
import { Menu } from './Menu'


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

            <ul className={ this.state.clicked ? "menu activate" : "menu"}>
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
}

export default Navbar;