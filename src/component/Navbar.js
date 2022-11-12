import React from 'react';
import { Link, Route, Switch } from 'wouter';
import Home from '../pages/Home';
import Portafolio from '../pages/Portafolio';
import Contact from '../pages/Contact';


// This is the Navbar component

export default function Navbar() {
  return (
    <div>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portafolio'>Portafolio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <Switch>
        <Route path='/' component={Home} />
        <Route path='/portafolio' component={Portafolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}