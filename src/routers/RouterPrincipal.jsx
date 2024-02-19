import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../componentes/Inicio'
import { SobreMi } from '../componentes/SobreMi'
import { Habilidades } from '../componentes/Habilidades'
import { Proyectos } from '../componentes/Proyectos'
import { Contacto } from '../componentes/Contacto'

export const RouterPrincipal = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Navigate to='/inicio'/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/sobremi' element={<SobreMi/>}/>
            <Route path='/habilidades' element={<Habilidades/>}/>
            <Route path='/proyectos' element={<Proyectos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            

        </Routes>
       
  )
}
