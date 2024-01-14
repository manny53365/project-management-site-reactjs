import {BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/project'>
              <Project/>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App
