import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Feed from './components/pages/Feed';
import Upload from './components/pages/Upload';

function App() {
    return ( <>
        <Router>
          
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/feed' component={Feed}/>
            <Route path='/upload' component={Upload}/>
          </Switch>
          </Router>
        
        </>
    );
}

export default App;