import React from 'react'
import Link from 'next/prefetch'

export const NavLink = (props) => (
  <Link href={props.to}>
    <a className={props.path === props.to?"active nav-item nav-link":"nav-item nav-link"} >{props.children}</a>
  </Link>  
)
export const NavBar = (props) => (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">Brew Log</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink {...props} to="/" >Home</NavLink>
              <NavLink {...props} to="/batches" >Batches</NavLink>
              <NavLink {...props} to="/batchdetails">Batch Details</NavLink>
              <NavLink {...props} to="/inventory">Inventory</NavLink>
              <NavLink {...props} to="/settings">Settings</NavLink>
            </div>
          </div>
        </nav>
    )