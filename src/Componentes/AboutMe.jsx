import { useState } from 'react'
import '../Estilos/AboutMe.css'

const AboutMe = () => {
    const frase = 'Hobbies :)'

    const [animacion, SetAnimacion] = useState(['Piano','Headphones','Tacos','Mando'])

    const [despliegue, SetDespliegue] = useState('PanelCovered')

    const Verificador = () => {
      if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4 -3 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*2 ) {
        SetDespliegue('PanelMostrando')
        SetAnimacion(['Piano','Headphones','Tacos','Mando'])
      } else if (document.documentElement.scrollTop > document.documentElement.scrollHeight/4*2 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*3) {
        SetDespliegue('PanelCovered')
        SetAnimacion(['','','',''])
      }
      else if (document.documentElement.scrollTop < document.documentElement.scrollHeight/4 && document.documentElement.scrollTop < document.documentElement.scrollHeight/4*3) {
        SetDespliegue('PanelCovered')
        SetAnimacion(['','','',''])
      }
    }
    window.addEventListener('scroll', Verificador)
    return (
      <div className="AboutMePage">
        <div className={`Foto ${despliegue}`}></div>
        <div className={`Valores ${despliegue}B`}>
          <span>Quickly</span>
          <ul>
            <li className="Respeto">21 years old</li>
            <li className="Responsabilidad">UVG 4th year student</li>
            <li className="Modestia">Guatemalan</li>
          </ul>
        </div>
        <div className={`Description ${despliegue}C`}>
          <h3>Well...</h3>
          <span>In honor of my family. <br/><br/>I am the grandson of passion and tenderness. I am the son of work.<br/>It does not mean that I identify with those words... <br/><br/>But I recognize the effort I have to make to achieve that.</span>
        </div>
        <div className={`Hobbies ${despliegue}D`}>
          <h3>{frase}</h3>
          <div className={animacion[0]}></div>
          <div className={animacion[1]}></div>
          <div className={animacion[2]}></div>
          <div className={animacion[3]}></div>
        </div>
      </div>
    )
  }
  
  export default AboutMe
  