import React from 'react'
import { react } from './../images/alarm-clock.png'

const Header = () => {
  return (
    <header>
        <p>Welcome to your</p>
        <img src={react} alt="alarm" /><h1>Todo app</h1>   
        <p>Add, Edit and Delete yor todo everyday, and stay updated.</p>
    </header>
  )
}

export default Header