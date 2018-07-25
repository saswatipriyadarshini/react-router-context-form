import React, {Component} from 'react';
import FormElement from './FormElement';
// import PhoneElement from './Phone';
import { Form } from 'reactstrap';
import './SignUp.css';
import FormValidator from '../../Links/Forms/SignUp';

class Forms extends Component{
  constructor(){
    super();


    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        phone: ''
      },
      errors:{
        name: '',
        email:'',
        password: '',
        phone: ''
      },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render(){
    return(
      <React.Fragment>
        <h1>Sign Up</h1>
      <div className='form-container'>
        <Form>
          <FormElement
            inputname='full-name'
            type='text'
            placeholder="Enter Your Full Name"
            name='Full Name'
            className='form-control'
            value = {this.state.email}
            onChange={(event) => this.handleUserInput(event)}
          />

        <FormElement
          inputname='email'
          type='text'
          placeholder="Type your Email"
          name='Email'
          className='form-control'
          onChange=''
        />

        <FormElement
          inputname='password'
          type='password'
          placeholder="Type Your Password"
          name='Password'
          className='form-control'
          onChange=''
        />
          <FormElement
            inputname='password'
            type='password'
            placeholder="Type Your Password"
            name='Confirm Password'
            className='form-control'
            onChange=''
          />
          <FormElement
            inputname='phone number'
            type='password'
            placeholder="Enter Your Phone Number"
            name='Phone Number'
            className='form-control'
            onChange=''
          />

          <button disabled className='btn-signUp'>Sign Up</button>
        </Form>
      </div>
      </React.Fragment>
    );
  }
}

export default Forms;