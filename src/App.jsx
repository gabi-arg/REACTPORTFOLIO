import './App.css'
import { RouterPrincipal } from './routers/RouterPrincipal'
import { Navbar } from './componentes/Navbar'
import { Footer } from './componentes/Footer'
import background from './imagenes/fondo.webp'
function App() {

  return (
    <>
      <div className='container'>
        <Navbar/>
        <RouterPrincipal/>
        <Footer/>
        </div>
      
     <img src={background} className='backgroud'></img>
    
    </>
  )
}

export default App
