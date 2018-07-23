import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Links/App/App';
import Home from './Links/Home/Home';
import Parent from './Links/Practice/Practice';
import Forms from './Links/Forms/SignUp';
import Test from './Links/ToggleClass/Test';
import myComponent from "./Links/States/thisState";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><NavLink to='/App'>App</NavLink></li>
        <li><NavLink to='/Home'>Home</NavLink></li>
        <li><NavLink to='/Practice'>Practice</NavLink></li>
        <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
        <li><NavLink to='/Test'>Test</NavLink></li>
        <li><NavLink to='/thisState'>State</NavLink></li>
      </ul>
      <hr/>

      <Route exact path='/App' component={App} />
      <Route path='/Home' component={Home} />
      <Route path='/Practice' component={Parent} />
      <Route path='/SignUp' component={Forms} />
      <Route path='/Test' component={Test} />
      <Route path='/thisState' component={myComponent} />
    </div>

  </Router>
  ,document.getElementById('root'));
registerServiceWorker();
