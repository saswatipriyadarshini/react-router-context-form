import React, {Component} from 'react';
import '../App/App.css';
import axios from 'axios';


class PersonInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const user ={
      name: this.state.name
    }

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  handleChange(){

  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input type="text" name='name' onChange={this.handleChange}/>
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}
export default PersonInput;