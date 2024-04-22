import React, { useState } from 'react'
import porfolioLaptop from '../imagenes/porfolioLaptop.jpg'
import porfolioPhone from '../imagenes/portfolioPhone.jpg'
import storeLaptop from '../imagenes/storeLaptop.jpg'
import storePhone from '../imagenes/storePhone.jpg'
import arrow from '../imagenes/flecha-correcta.png'


export const Proyectos = () => {

  const [ show, setShow ] = useState(true)

  const showProject = () =>{
    setShow(!show)
  }

  return (
    <>
        <section className="section-projects">
          <div className="projects">
            {show ? 
              <div className="project-container-first">
                    <img className="project-container-desktop" src={porfolioLaptop} alt="porfolioLaptop" />
                    <img className="project-container-mobile" src={porfolioPhone} alt="porfolioPhone" />
                    <div className="btn-project">
                         <a href="/">Demo</a>
                         <a href="https://github.com/gabi-arg/REACTPORTFOLIO">Code</a>
                    </div>
                    <p className='project-description'>
                    Dentro de mi portafolio, destaco un proyecto muy especial: ¡el mismo portafolio que estás explorando ahora mismo! Este proyecto es un testimonio de mis habilidades en desarrollo web, utilizando tecnologías como React, componentes modulares y diseño con CSS. Presenta una experiencia de usuario fluida con navegación a través de React Router y destaca la versatilidad de mi trabajo con una interfaz dinámica y profesional.
                    </p>
              </div>
              :
              <div className="project-container-seconds">
                    <img className="project-container-desktop" src={storeLaptop} alt="" />
                    <img className="project-container-mobile" src={storePhone} alt="" />
                    <div className="btn-project">
                         <a href="https://storeclothes.netlify.app/">Demo</a>
                         <a href="https://github.com/gabi-arg/StoreClothesApp">Code</a>
                    </div>
                    <p className='project-description'>
                    Proyecto E-Commerce React con API:<br/> 
                    Plataforma de comercio electrónico desarrollada en React, que utiliza componentes reutilizables y hooks como useState y useEffect. Además, integra React Router y react-credit2 para una navegación fluida y pagos seguros. Se conecta a una API para obtener y gestionar datos de productos, proporcionando una experiencia de compra intuitiva y eficiente para los usuarios.
                    </p>
                </div>
            }
          </div>
            <button className='project-slider'onClick={showProject}><img src={arrow}/></button>
            </section>
    </>
  )
}
