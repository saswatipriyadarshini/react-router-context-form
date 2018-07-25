import React, {Component} from 'react';
import '../App/App.css';
import axios from 'axios';


class Person extends Component {
  state = {
    person: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res);
      this.setState({ person: res.data });
    });
  }
  render(){
    return(
      <div>
        <ol>
          {this.state.person.map(person =>
            <li key={person.id}>{person.name}</li>)}
        </ol>
      </div>
    );
  }
}
export default Person;

