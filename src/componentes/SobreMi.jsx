import React from 'react'
import perfil from "../imagenes/foto-perfil.png"
import Curriculum from "../imagenes/GABRIELADURANCV.pdf" 
import flechaDescarga from '../imagenes/descargas.png'
export const SobreMi = () => {
  return (
    <>
      
        <section className="section-about-me">
          <img src={perfil} alt="foto-perfil" className='foto-perfil'/>
          <div className="about-me-text">
            <p>Hola! Me llamo Gabriela.Soy estudiante de la tecnicatura en Programación del Instituto Teclab. Además me considero  apasionada del Desarrollo Web, el cual a través de cursos y de manera autodidacta he logrado adquirir conocimientos en diferentes tecnologías. Con las cuales he logrado desarrollar diferentes proyectos propios. Muchas Gracias por ver mi porfolio.</p>
            <div className="btn">
              <img src={flechaDescarga} alt="flecha apuntando hacia abajo"/>
              <a download="" href={Curriculum} alt="logo-descarga"> Descarga mí CV </a>
            </div>
          </div>
        </section>
      
    </>
  )
}
