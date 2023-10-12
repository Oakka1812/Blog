import React from 'react'
import './App.css'
import { Outlet, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <nav>
        <h1>MyBlog</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App