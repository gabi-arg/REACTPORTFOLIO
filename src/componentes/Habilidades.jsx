import React from 'react'
import js from '../imagenes/javascript (1).png'
import html from '../imagenes/archivo-html.png'
import css from '../imagenes/formato-de-archivo-css.png'
import react from '../imagenes/react.png'
export const Habilidades = () => {
  return (
    <>
    <section className="skill">
      <img src={html} alt="logo-lenguaje"/>
      <img src={css} alt="logo-lenguaje"/>
      <img src={js} alt="logo-lenguaje"/>
      <img src={react} alt="logo-lenguaje"/>
    </section>
    </>
  )
}
