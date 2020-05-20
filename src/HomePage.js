import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LoginContext } from './state/login.context';

function HomePage() {
  const { email, setNewEmail } = useContext(LoginContext);
  const context = useContext(LoginContext);

  if (context.email) {
    return (
      <div className="container">
        <div className="content">
          <span>Logged in User Email: {email}</span>
          &nbsp;&nbsp;
          <Link to="/login" onClick={() => setNewEmail('')}>
            Logout
          </Link>
        </div>
      </div>
    );
  }

  return <Redirect to="/login" />;
}

export default HomePage;
