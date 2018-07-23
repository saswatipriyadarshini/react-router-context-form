import React, { Fragment, Component } from 'react';
import './App.css';


const MyContext = React.createContext();

class MyProvider extends Component {
  state ={
    name: 'SP',
    age: 25,
    sex: 'Female'
  }

  render(){
    return(
      <MyContext.Provider value={{
        state: this.state,
        growOld: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
          <Home />
          <p>What a wonderful world!</p>
        </div>
      </MyProvider>
    );
  }
}

const Home = () => (
  <div className='home'>
    <Family />
  </div>
)

const Family = () => (
  <div className='family'>
    <Person />
  </div>
)

class Person extends Component{
  render(){
    return(
      <div className='person'>
        <MyContext.Consumer>
          {(value) => (
            <React.Fragment>
            <p>Age: {value.state.age}</p>
              <p>Name: {value.state.name}</p>
              <p>Sex: {value.state.sex}</p>
              <button onClick={value.growOld}>Click me</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}


export default App;
