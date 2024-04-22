import React from 'react'
import js from '../imagenes/js.svg'
import html from '../imagenes/html.svg'
import css from '../imagenes/css3.svg'
import bootstrap from '../imagenes/bootstrap.svg'
import react from '../imagenes/react.svg'
import vue from '../imagenes/vue.svg'
export const Habilidades = () => {
  return (
    <>
    <section className="skill">
      <img src={html} alt="logo-lenguaje"/>
      <img src={css} alt="logo-lenguaje"/>
      <img src={bootstrap} alt="logo-lenguaje"/>
      <img src={js} alt="logo-lenguaje"/>
      <img src={react} alt="logo-lenguaje"/>
      <img src={vue} alt="logo-lenguaje"/>
    </section>
    </>
  )
}
