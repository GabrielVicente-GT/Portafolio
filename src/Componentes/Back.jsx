import { useState } from 'react'
import '../Estilos/Back.css'

const Back = () => {
    
    const circulos = ['+','+','+','+','+','+','+']

    return (
      <div className="FondoAnimado">
        <h1>Gabriel Vicente</h1>
        <h3>Your next Groundbreaker</h3>
        <div className="Animations">
        {
          circulos.map((frag, indexB) => {
            if (frag === '+') {
              return <div key={(indexB).toString()}></div>
            }
          })
        }
        </div>
      </div>
    )
  }
  
  export default Back
  