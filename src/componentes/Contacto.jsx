import React from 'react'
import email from '../imagenes/email.png'
import github from '../imagenes/github.png'
import linkedin from '../imagenes/linkedin.png'

export const Contacto = () => {
  const enviarEmail = () => {
    window.location.href = "mailto:gabrieladuran013@gmail.com";
  };
  return (
    <>
      <section className="section-contact">
        <a onClick={enviarEmail} ><img src={email}/></a>
        <a href='https://github.com/gabi-arg'> <img src={github}/></a>
        <a href='https://www.linkedin.com/in/gabriela-duran-/'> <img src={linkedin}/></a>
      </section>
    </>
  )
}
