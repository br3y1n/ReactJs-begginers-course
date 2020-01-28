import React, { Component } from 'react'

class ButtonLogout extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <button>Cerrar sesion</button>
      </div>

    )
  }
}

class ButtonLogin extends Component {
  render() {
    return (
      <button>Iniciar sesion</button>
    )
  }
}


export default class ConditionalComponent extends Component {

  constructor() {
    super()
    this.state = { logged: true }
  }

  render() {
    return (
      this.state.logged ? <ButtonLogout /> : <ButtonLogin />
    )
  }
}