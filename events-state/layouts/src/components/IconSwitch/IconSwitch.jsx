import React from 'react'
import './IconSwitch.css'

export default function IconSwitch({icon, onSwitch} ) {
  const handleClick = (e) => {
    onSwitch(icon)
  }
  return (
    <span className="material-icons IconSwitch" onClick={handleClick}>{icon}</span>
  )
}
