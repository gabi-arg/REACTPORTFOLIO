import React from 'react'
import email from '../imagenes/email.png'
import github from '../imagenes/github.png'
import linkedin from '../imagenes/linkedin.png'


export const Footer = () => {

  const enviarEmail = () => {
    window.location.href = "mailto:gabrieladuran013@gmail.com";
  };

  return (   
    <>
      <div className='footer-redes' >
        <a onClick={enviarEmail} ><img src={email}/></a>
        <a href='https://github.com/gabi-arg'> <img src={github}/></a>
        <a href='https://www.linkedin.com/in/gabriela-duran-/'> <img src={linkedin}/></a>
      </div>
      <p className='footer'> &#169; Gabriela Duran - 2024</p>
    </>     

  )
}
