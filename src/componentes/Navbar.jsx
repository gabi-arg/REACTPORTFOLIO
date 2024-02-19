import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="inicio" className={({isActive})=> isActive ? 'active' : ''}>Inicio</NavLink>
        <NavLink to="sobremi" className={({isActive})=> isActive ? 'active' : ''}>Sobre Mí</NavLink>
        <NavLink to="habilidades" className={({isActive})=> isActive ? 'active' : ''}>Habilidades</NavLink> 
        <NavLink to="proyectos" className={({isActive})=> isActive ? 'active' : ''}>Proyectos</NavLink> 
        <NavLink to="contacto" className={({isActive})=> isActive ? 'active' : ''}>Contactame</NavLink>
      </div>
    </>
  )
}
