import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Links/App/App';
import PersonInput from './Links/Home/PersonInput';
import Person from './Links/Home/Person';
import Parent from './Links/Practice/Practice';
import Forms from './Links/Forms/SignUp';
import Test from './Links/ToggleClass/Test';
import myComponent from "./Links/States/thisState";
import MemberList from "./Links/ComponentLifeCycle/LifeCycle";
import TimeStamp from "./Links/ComponentLifeCycle/TimeStamp";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <ul className='main-container'>
        <li><NavLink to='/App'>App</NavLink></li>
        <li><NavLink to='/Person'>Person</NavLink></li>
        <li><NavLink to='/PersonInput'>PersonInput</NavLink></li>
        <li><NavLink to='/Practice'>Practice</NavLink></li>
        <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
        <li><NavLink to='/Test'>Test</NavLink></li>
        <li><NavLink to='/thisState'>State</NavLink></li>
        <li><NavLink to='/MemberList'>Member</NavLink></li>
        <li><NavLink to='/TimeStamp'>Time</NavLink></li>
      </ul>
      <hr/>

      <Route exact path='/App' component={App} />
      <Route path='/Person' component={Person} />
      <Route path='/PersonInput' component={PersonInput} />
      <Route path='/Practice' component={Parent} />
      <Route path='/SignUp' component={Forms} />
      <Route path='/Test' component={Test} />
      <Route path='/thisState' component={myComponent} />
      <Route path='/MemberList' component={MemberList} />
      <Route path='/TimeStamp' component={TimeStamp} />
    </div>

  </Router>
  ,document.getElementById('root'));
registerServiceWorker();

