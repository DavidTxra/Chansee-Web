import React from 'react';
import Home from './components/home/Home.js';
import Rule from './components/rules/Rule.js';
import Administration from './components/admin/Admin.js';

import './App.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
       <header className="Toolbar">
                <nav className="Toolbar_navigation">
                    <div className="Toolbar_logo"><a href="/">CHANSEE</a></div>
                    <div className="Toolbar_navigation-items">
                        <ul>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li><NavLink to="/regles">Règles</NavLink></li>
                            <li><NavLink to="/">Blog</NavLink></li>
                            <li><NavLink to="/">Contact</NavLink></li>
                            <li><NavLink to="/admin">Admin</NavLink></li>
                        </ul>
                    </div>
                    <div className="spacer" />
                    <div className="Toolbar_login">
                        <ul>
                         <li><NavLink to="/">Connexion /</NavLink></li>
                         <li><NavLink to="/">Inscription</NavLink></li>
                     </ul>
                     </div>
                 </nav>
        </header>
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/regles" component={Rule}></Route>
          <Route exact path="/admin" component={Administration}></Route>
        </main>
        <div className="Main-footer">
            <div className="Container">
                <div className="Logo">
                    <a href="/">CHANSEE</a>
                </div>
                <div className="Footer-nav">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/regles">Règles</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/admin">Admin</a></li>
                    </ul>
                </div>
            </div>
            <div className="Copyright">
                <p>&copy; 2019 Chansee</p>
            </div>
        </div>
    </div>
    </Router>
  );
}

export default App;