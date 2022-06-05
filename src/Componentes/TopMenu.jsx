import { useState } from 'react'
import '../Estilos/TopMenu.css'

const TopMenu = () => {
    const [BotonesArriba,SetBotonesArriba] = useState('Selecciones')
    const [SeparadoresArriba,SetSeparadoresArriba] = useState('Separadores')
    const Verificando = () => {
      if (document.documentElement.scrollTop < document.documentElement.scrollHeight/4) {
        SetBotonesArriba('Selecciones')
        SetSeparadoresArriba('Separadores')
      }else if (document.documentElement.scrollTop >= document.documentElement.scrollHeight/4 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*2 ) {
        SetBotonesArriba('SeleccionesAM')
        SetSeparadoresArriba('SeparadoresAM')
      } else if (document.documentElement.scrollTop >= document.documentElement.scrollHeight/4*2 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*3) {
        SetBotonesArriba('Selecciones')
        SetSeparadoresArriba('Separadores')
      } else if (document.documentElement.scrollTop >= document.documentElement.scrollHeight/4*3) {
        SetBotonesArriba('SeleccionesAM')
        SetSeparadoresArriba('SeparadoresAM')
      } 
    }
    window.addEventListener('scroll', Verificando)
    return (
      <div className="MenuSuperior">
          <div className="Botones">
            <button type="button"  className={`${BotonesArriba} AlgunaClase`} onClick={() => { window.scrollTo({ behavior: 'smooth', top: document.documentElement.scrollHeight/4}) }}>About me</button>
            <span className={SeparadoresArriba}>|</span>
            <button type="button" className={`${BotonesArriba} AlgunaClase`} onClick={() => { window.scrollTo({ behavior: 'smooth', top: document.documentElement.scrollHeight/4*2}) }}>My work</button>
            <span className={SeparadoresArriba}>|</span>
            <button type="button" className={`${BotonesArriba} AlgunaClase`} onClick={() => { window.scrollTo({ behavior: 'smooth', top: document.documentElement.scrollHeight/4*3 }) }}>Talk to me</button>
          </div>
          
      </div>
    )
  }
  
  export default TopMenu
  