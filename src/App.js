import React, { Component } from 'react';
import './assets/css/App.css';

/*//imports
//import MyComponent from './components/MyComponent'

//function Test(attr) { // form 1
  //return <h2>{attr.title}</h2>
//}

//const Test = (at) => <h2>{at.title}</h2> // form 2

class Test extends Component { // form 3

  render() {
    return <h2>{this.props.title}</h2> //props is a reserved word
  }
}

class Text extends Component {
  render() {
    const {
      text,
      number,
      array,
      callback
    } = this.props //destructuring 

    return <div>
      <p>{text}</p>
      <p>{number}</p>
      <p>{array.map(callback).join(', ')}</p>
      <p>{this.props.propByDf}</p>
    </div>
  }
}

Text.defaultProps = {
  propByDf: 'esta es por defecto'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test title='Probando' />
        <Text
          text="que buen texto"
          number={1}
          array={[1, 2, 3]}
          callback={(val) => val * 2} />

        <section className="components">
          <MyComponent />
        </section>
      </header>
    </div>
  );
}

export default App;*/

/*class Count extends Component {

  constructor(props) {
    super(props)
    this.state = { count: this.props.countInit }

    setInterval(() => {
      this.setState({ count: ++this.state.count })
    }, 1000)
  }

  render() {
    return <NumberCount number={this.state.count} />
  }
}

Count.defaultProps = {
  countInit: 0
}

class NumberCount extends Component {
  render() {
    return (
      <p>{this.props.number}</p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hola</h1>
        <Count countInit={100} />
      </div>

    )
  }
}

export default App*/

/*import ConditionalComponent from './components/ConditionalComponent';

export default class conditionalTest extends Component {
  render() {
    return (
      <ConditionalComponent />
    )
  }
}*/


/*export default class ListTest extends Component {
  render() {
    const numbers = [1, 2, 3, 4]
    return (
      <div>
        {numbers.map((number, idx) => <p key={idx}>Soy el numero {number}</p>)}
      </div>
    )
  }
}*/

import cars from './assets/data/cars.json'

class ListCar extends Component {
  render() {
    const { car } = this.props

    return (
      <li>
        <p> El carro <strong>{car.name}</strong> tiene {car.cc} CC</p>
      </li>

    )
  }
}

export default class ObjectsJson extends Component {
  render() {
    return (
      <ul>
        {cars.map((car, idx) => <ListCar key={idx} car={car} />)}
      </ul>
    )
  }
}
