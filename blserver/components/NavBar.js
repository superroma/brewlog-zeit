import React from 'react'
import Link from 'next/prefetch'

export const NavLink = (props) => (
  <Link href={props.to} className="nav-item nav-link" activeClassName="active">
    <a>{props.children}</a>
  </Link>  
)
export const NavBar = () => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">Brew Log</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/batches">Batches</NavLink>
        <NavLink to="/batchdetails">Batch Details</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  </nav>
)