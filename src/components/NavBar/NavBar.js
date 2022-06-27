import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/vans_logo.png";
import CartWidget from "../CartWidget/CartWidget"; 
import "./navBar.css"

const NavItem = ({page, name}) => {
  return (
    <Link to={`/${page}`} className="navItem mx-1">{`${name.toUpperCase()}`}</Link>         
  )
}

const NavBar = () => {    
  const [backgroundNavbar, setBackgroundNavbar] = useState("");
  const [filter, setFilter] = useState("100%");

  let location = useLocation();
          
  const cambiarFondo = () => { 
    if (location.pathname !== "/") {            
      setBackgroundNavbar ("navbarBlanco");
      setFilter("0%");
    } else {            
      setBackgroundNavbar ("");
      setFilter("100%");
    }
  }
  
  useEffect(() => {
    cambiarFondo(); // eslint-disable-next-line  
  }, [location]) 
  
  return (        
    <nav className={`header col-1 my-0 py-0`}  id="header"> 
      <div className="row">     
        <Link to={`/`} className="logo" style={{filter: `invert(${filter})`}} href="#index">
          <img src={logo} alt="logo" />
        </Link> 
        <ul className={`navBar ${backgroundNavbar}`}> 
          <CartWidget filter={filter}/>                           
          <NavItem page="contacto" name="contacto" />
          <NavItem page="category" name="zapatillas" />
          <NavItem page="novedades" name="novedades"/>                                                                                                           
        </ul> 
      </div> 
    </nav>        
  )
}

export default NavBar;