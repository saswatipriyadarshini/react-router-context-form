import React, {Component} from 'react';
import './Test.css';


class Test extends Component {
  constructor(){
    super();
    this.state = {
      power: false // This is the light power on, by default it should be off,
    }
    this.toggleBulb = this.toggleBulb.bind(this);
    this.lightBulbClasses = this.lightBulbClasses.bind(this);
    this.buttonText = this.buttonText.bind(this);
  }

  toggleBulb(){
    let light_bulb_power = this.state.power;
    this.setState({power: !light_bulb_power}); // ! makes it false if its true and vice versa
  }

  // function which will give list of classes
  lightBulbClasses(){
    let classes = '';
    if(this.state.power === false){
      classes = "light-bulb";
    } else {
      classes = "light-bulb on";
    }
    return classes;
  }

  buttonText(){
    let text;
    if(this.state.power === false){
      text = "Turn On";
    } else {
      text = "Turn Off";
    }
    return text;
  }
  render(){
    return(
      <React.Fragment>
        <div className='bulb-container'>
          <div className={this.lightBulbClasses()}>
          </div>
          <button className="btn-test" onClick={this.toggleBulb}>{this.buttonText()}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Test;