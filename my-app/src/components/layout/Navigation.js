import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand } from 'reactstrap'
function Navigation() {
  return (
    <div>
      <Navbar
        className=""
        color="dark"
        dark
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={require('../../assets/images/logo-og.png')}
            style={{
              height: 40,
              width: 40
            }}
          />
        </NavbarBrand>
        <NavLink style={{color:"white"}} className="nav-link" to="/contact">Contact</NavLink>
        <NavLink style={{color:"white"}} className="nav-link" to="/about">About</NavLink>
        <NavLink style={{color:"white"}} className="nav-link" to="/employee">Employees</NavLink>
     
      </Navbar>
    </div>
  )
}

export default Navigation
