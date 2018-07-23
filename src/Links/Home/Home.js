import React, {Component} from 'react';
import '../App/App.css';


class Home extends Component {
  render(){
    return(
      <Child this/>
    );
  }
}

class Child extends Component{
  render(){
    return(
      <GrandChild color={this.props.color}/>
    );
  }
}

class GrandChild extends Component{
  render(){
    return(
      <div>
        <p style={{color: this.props.color}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad beatae,
          commodi distinctio dolores esse, illum mollitia neque obcaecati optio quam quidem
          quo recusandae rerum saepe temporibus ullam veniam voluptatum?
        </p>
      </div>

    );
  }
}
export default Home;