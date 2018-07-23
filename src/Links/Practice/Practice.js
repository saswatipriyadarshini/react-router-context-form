import React, {Component} from 'react';
import './Practice.css';

const AppContext = React.createContext('light');

class AppProvider extends Component{
  state = {
    name:'Saswati Priyadarshini',
    age: 25
  }

  render(){
    return(
      <AppContext.Provider value=''>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

class Parent extends Component {
  render(){
    return(
      <AppProvider>
        <Child />
      </AppProvider>
    );
  }
}

class Child extends Component {
  render(){
    return(
      <GrandChild />
    );
  }
}

class GrandChild extends Component{
  render(){
    return(
      <div>
        <AppContext>
          {(value) => (
            <p>This is the grand child {value}</p>
          )}
        </AppContext>
        <GreatGrandChild />
      </div>
    );
  }
}

class GreatGrandChild extends Component {
  render(){
    return(
      <div className='greatGrandChild'>
        <AppContext.Consumer>
          {(context) => (
            <p>This is the Great Grand child {context}</p>
          )}
        </AppContext.Consumer>
      </div>
    )
  }
}

export default Parent;