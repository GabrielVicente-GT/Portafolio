import { useState } from 'react'
import './Estilos/Portafolio.css'
import Atras from './Componentes/Back'
import Menu from './Componentes/TopMenu'
import Arriba from './Componentes/HaciaArriba'
import About from './Componentes/AboutMe'
import Work from './Componentes/MyWork'
import Talk from './Componentes/Talk'


function Portafolio() {


  return (
    <div className="App">
      <Atras />
      <Arriba />
      <About />
      <Work />
      <Talk />
      <Menu />
    </div>
  )
}

export default Portafolio
