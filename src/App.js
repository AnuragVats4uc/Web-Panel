import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogosPage from './pages/LogosPage';
import TaskPage from './pages/TaskPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import { useState } from 'react';
import { ProtectedRoutes } from './components/Login/ProtectedRoutes';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          
          
          <ProtectedRoutes exact path='/home' component={HomePage} />
          <ProtectedRoutes exact path='/task' component={TaskPage} />
          <ProtectedRoutes exact path='/user' component={UserPage} />
         
          <Route exact path='/' component={LogosPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
