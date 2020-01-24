import React, { Component } from 'react'

class MyComponent extends Component {

  render() {

    let receta = {
      nombre: 'pizza',
      ingredientes: ['piña', 'queso', 'harina'],
      calorias: 500
    }
    return (
      <div>
        <h1> hoy haremos una {receta.nombre}</h1>
        <h2> con {`${receta.calorias} (probando EMC6)`}</h2>
        <h3>estos son los ingredientes:</h3>

        {receta.ingredientes.map((val, idx) => {
          return (
            <li key={idx}>
              {val}
            </li>
          )
        })}


      </div>
    )
  }
}

export default MyComponent