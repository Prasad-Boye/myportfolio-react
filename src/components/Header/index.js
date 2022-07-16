import {NavLink ,Link} from 'react-router-dom'
import { Component } from 'react'
// import NavigationTextItem from '../NavigationTextItem'

import './index.css'

class Header extends Component {
  render(){
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://logos.textgiraffe.com/logos/logo-name/30404890-designstyle-boots-l.png"
                alt="website logo"
              />
            </Link>
          </div>
  
          <div className="nav-bar-large-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://logos.textgiraffe.com/logos/logo-name/30404890-designstyle-boots-l.png"
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <NavLink to='/' className='nav-link' activeClassName="active"> 
                    Home
                </NavLink>
              </li>
              <li className="nav-menu-item" >
                <NavLink to='/education' className='nav-link' activeClassName="active">
                    Edu & Exp
                </NavLink>
              </li>
              <li className="nav-menu-item" >
                <NavLink to='/skills' className='nav-link' activeClassName="active">
                    Skills
                </NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to='/projects' className='nav-link' activeClassName="active">
                    My Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <NavLink to="/" className="nav-link" activeClassName="active">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_416829.png"
                  alt="nav home"
                  className="nav-bar-image"
                />
              </NavLink>
            </li>
  
            <li className="nav-menu-item-mobile">
              <NavLink to="/Education" className="nav-link" activeClassName="active">
                <img
                  src="https://cdn.onlinewebfonts.com/svg/img_454261.png"
                  alt="nav Education"
                  className="nav-bar-image"
                />
              </NavLink>
            </li>
            <li className="nav-menu-item-mobile">
              <NavLink to="/skills" className="nav-link" activeClassName="active">
                <img
                  src="http://getdrawings.com/vectors/skills-icon-vector-24.png"
                  alt="nav skills"
                  className="nav-bar-image"
                />
              </NavLink>
            </li>
            <li className="nav-menu-item-mobile">
              <NavLink to="/projects" className="nav-link" activeClassName="active">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/reputation-management-1-1/66/44-512.png"
                  alt="nav projects"
                  className="nav-bar-image"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
