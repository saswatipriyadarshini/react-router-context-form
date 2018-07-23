import React, {Component} from 'react';
import FormElement from './FormElement';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignUp.css';

class Forms extends Component{
  render(){
    return(
      <div className='form-container'>
        <Form>
          <FormElement
            inputname='full-name'
            type='text'
            placeholder="Enter Your Full Name"
            name='Full Name'
            className='form-control'
            onChange=''
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
          name='password'
          className='form-control'
          onChange=''
        />
          <button className='btn-signUp'>Sign Up</button>
        </Form>
      </div>
    );
  }
}

export default Forms;