import React from "react";
import { Link, withRouter } from "react-router-dom";
import {  NavItem } from "reactstrap";

import { isAuthenticated } from "./apiCore";
import "./Navigation.css"






const Navigation = ({history,setIsUser}) => {

  const clickSingOut = (event) =>{
    console.log("funca")
    localStorage.removeItem("jwt")
    setIsUser (null)

}
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="img/SERAFINA1.png" alt="Logo Serafina"  className="d-inline-block align-text-top"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
          <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signup">
                      Singup
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/signin">
                      Login
                    </Link>
                  </NavItem>
                  
                </>
            
          </li>
         
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>


      

        
      
    </div>
  );
};

export default withRouter(Navigation);
