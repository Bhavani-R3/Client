import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

function Header() {
  const context = useContext(AuthContext)
  const isLogin = context.isLogin
  const isAdmin = context.isAdmin
  const isUser = context.isUser

  return (
    <header>
      <nav className={isLogin ? "navbar navbar-expand-md navbar-dark bg-success": "navbar navbar-expand-md navbar-dark bg-primary" }>
        <div className="container">
          <NavLink to={`/`} className="navbar-brand">MERN Project</NavLink>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

        {
          isLogin ? (
          <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={`/`} className="nav-link">Home</NavLink>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown'>
                <NavLink to={`/`} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Account <i className='bi bi-person'></i>
                </NavLink>
              {
                isUser ? (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to={`/user/dashboard`} className="dropdown-item">User DashBoard</NavLink>
                    </li>
                    <li>
                      <NavLink to={`/#`} className="dropdown-item">Logout</NavLink>
                    </li>
                  </ul>
                ) : null
              }

              {
                isAdmin ? (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to={`/admin/dashboard`} className="dropdown-item">Admin DashBoard</NavLink>
                    </li>
                    <li>
                      <NavLink to={`/#`} className="dropdown-item">Logout</NavLink>
                    </li>
                  </ul>
                ) : null
              }
              </li>
            </ul>
          </div> ) : ( 
          <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={`/login`} className="nav-link">Login</NavLink>
              </li>
              <li>
                <NavLink to={`/register`} className="nav-link">Register</NavLink>
              </li>
            </ul>     
          </div> )
        }          
        </div>
      </nav>
    </header>
  )
}

export default Header