import React, { useState, useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import HeaderLink from './components/displays/headerLink'
import ScrollToTop from './components/logic/scrollToTop'

import Info from './pages/info';
import Eligiblity from './pages/eligibility';
import NoMatch from './pages/noMatch'

const homePath = '/';

// Add new page components here:
const routes = [
  {
    path: '/info',
    label: 'Info',
    component: Info
  },
  {
    path: '/eligibility',
    label: 'Eligiblity',
    component: Eligiblity
  }
]

export default function App() {

  return (
    <div className='app'>
      <Router>
        <div className='header'>
          <h1>Clear My Missouri Record</h1>
          <div align='center'>
            {routes.map((route) => (
              <HeaderLink 
                activeOnlyWhenExact={true}
                to={route.path}
                label={route.label}
              />
            ))}
          </div>
        </div>
        <ScrollToTop />
        <Switch>
          {routes.map((route) => (
            <Route 
              exact path={route.path} 
              component={route.component} 
              key={route.path}
            />
          ))}
          <Redirect 
            exact from={homePath}
            to={routes[0].path} 
          />
          <Route component={NoMatch} />
        </Switch>
        <div className='bottom-spacer' />
        <div className='footer'>
          <div className='footer-content'>footer placeholder</div>
        </div>
      </Router>
    </div>
  );
}
