import React from 'react';
import { Link, Route, Switch } from 'wouter';
import Home from '../pages/Home';
import Generador from '../pages/Generador';
import Mezclado from '../pages/Mezclado';
import Libre from '../pages/Libre';

// This is the Navbar component

export default function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between p-4 bg-gradient-to-r from-indigo-700 to-purple-500'>
        <ul className='flex'>
          <li className='mr-6'>
            <Link to='/' className='hover:text-gray-100'>Home</Link>
          </li>
          <li className='mr-6'>
            <Link to='/generador' className='hover:text-gray-100'>Generador</Link>
          </li>
          <li className='mr-6'>
            <Link to='/mezclado' className='hover:text-gray-100'>Mezclado</Link>
          </li>
          <li>
            <Link to='/libre' className='hover:text-gray-100'>Libre</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/generador' component={Generador} />
        <Route path='/mezclado' component={Mezclado} />
        <Route path='/libre' component={Libre} />
      </Switch>
    </>
  );
}
