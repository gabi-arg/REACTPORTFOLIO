import { useRef }from 'react'

import emailjs from '@emailjs/browser'
export const Contacto = () => {

  const refForm = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();

    const serviceId = 'service_z8aqv0d';
    const templateId ='template_ky62jlg';
    const apiKey = 'NsSD491UwajVhGGgD';

    emailjs.sendForm( serviceId, templateId,refForm.current, apiKey)
    .then( res =>console.log(res.text))
    .catch(error =>console.error(error))

    alert('El mail a sido enviado con exito!')
    event.target.reset();
  }


  return (
    <>
      <section className="section-contact">
      <form ref={refForm} onSubmit={handleSubmit} className='contact-container'>
        <input name='name' type='text' placeholder='Name' required className='contact-input'/>
        <input name='email' type='email' placeholder='tuemail@gmail.com' required className='contact-input'/>
        <textarea name='message' type='text' placeholder='Escribe tu mensaje' maxLength='600' required className='contact-textarea'/>
        <button className='contact-btn'>Send</button>
      </form>
  
      </section>
    </>
  )
}

