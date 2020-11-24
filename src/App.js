import React from 'react';
import './styles/App.css';
import { HashRouter, Route, Link } from "react-router-dom";

import Home from './components/Home.js';
import Collections from './components/Collections.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


const App = () => (

  <HashRouter basename="/">
    <div>
      <ul class="block-menu">
      <h1 class="top-left">
      SeCruse Studio
      </h1>
      <li class="button-icon"><Link to="/">
        Home
      </Link></li>
      <li class="button-icon"><Link to="/Gallery">
      Gallery
      </Link></li>
      <li class="button-icon"><Link to="/About">
      About
      </Link></li>
            <li class="button-icon-bottom"><Link to="/Contact">
      Contact
      </Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Gallery" component={Collections} />
      <Route path="/Contact" component={Contact} />
    </div>
    </HashRouter>
);

export default App;