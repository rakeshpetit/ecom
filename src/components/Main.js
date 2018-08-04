import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Search from './Search';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/products' component={Products}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/search' component={Search}/>
    </Switch>
  </main>
)

export default Main
