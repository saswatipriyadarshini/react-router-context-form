import React, { Component } from 'react';

class Test extends Component{
  constructor(){
    super();
    this.state = {
      content: false
    }
    this.toggleText = this.toggleText.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  toggleText(){
    let header = this.state.content;
    this.setState({content: !header});
  }

  changeText(){
    let text = '';
    if(this.state.content === false){

    } else{
      text = "Adding something";
    }
    return text;
  }

  render(){
    return(
      <React.Fragment>
        <div>
            <p>{this.changeText()} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium autem, debitis dicta dignissimos esse et, eum,
            expedita facilis ipsam natus obcaecati odit possimus
            tempore ullam voluptates! Excepturi fugit impedit tempora.</p>
        </div>
        <button onClick={this.toggleText}>Click Me</button>
      </React.Fragment>
    );
  }
}
export default Test;