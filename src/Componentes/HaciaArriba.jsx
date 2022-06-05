import React from 'react'
import '../Estilos/HaciaArriba.css'

const HaciaArriba = () => {
  const [Boton, SetBoton] = React.useState('ArribaHidden')

  const Verificador = () => {
    if (document.documentElement.scrollTop > 1) {
      SetBoton('Arriba')
    } else if (document.documentElement.scrollTop < 1) {
      SetBoton('ArribaHidden')
    }
  }
  window.addEventListener('scroll', Verificador)
  return (
    <div className="Top">
      <button type="button" className={Boton} alt="Inicial" onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0 }) }}></button>
    </div>
  )
}

export default HaciaArriba
