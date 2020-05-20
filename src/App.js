import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
import LoginPage from './components/Login/LoginPage';
import { useEmail } from './hooks/email.hook';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginContext } from './state/login.context';

function App() {
  const email = useEmail();

  return (
    <div className="container-fluid">
      <LoginContext.Provider value={email}>
        <Router>
          <React.StrictMode>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </React.StrictMode>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
