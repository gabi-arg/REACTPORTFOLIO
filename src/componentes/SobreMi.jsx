import React from 'react'
import perfil from "../imagenes/fotoPerfil.jpg"
import Curriculum from "../imagenes/CVGabrielaDuran.pdf" 
export const SobreMi = () => {
  return (
    <>
      
        <section className="section-about-me">
          <img src={perfil} alt="foto-perfil" className='foto-perfil'/>
          <div className="about-me-text">
            <p>Hola! Me llamo Gabriela.Soy estudiante de la tecnicatura en Programación del Instituto Teclab. Además me considero  apasionada del Desarrollo Web, el cual a través de cursos y de manera autodidacta he logrado adquirir conocimientos en diferentes tecnologías. Con las cuales he logrado desarrollar diferentes proyectos propios. Muchas Gracias por ver mi porfolio.</p>
            <div className="btn">
              <img src="/src/imagenes/descargas.png" alt=""/>
              <a download="" href={Curriculum} alt="logo-descarga"> Descarga mí CV </a>
            </div>
          </div>
        </section>
      
    </>
  )
}
