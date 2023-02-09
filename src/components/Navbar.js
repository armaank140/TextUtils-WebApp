import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  const handleOnclick =()=>{
    props.toggleMode()
    props.toggleStyle()
  }

  
  return (
      <div>
         <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
             <div className="container-fluid">
                  <a className="navbar-brand" href='/'>{props.title}</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                </ul>        
             </div>
             <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={handleOnclick} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
              </div> 
        </div>  
      </nav>
    </div>
  )
}
