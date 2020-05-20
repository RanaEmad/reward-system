import React, { useState, useContext } from 'react';
import './LoginPage.css';
import { Link, Redirect } from 'react-router-dom';
import { LoginContext } from './../../state/login.context';

function LoginPage() {
  const [loginData, setLoginData] = useState({});
  const { email, setNewEmail } = useContext(LoginContext);

  function handleChange({ target }) {
    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // if (!formIsValid()) return;
    console.log(loginData);
    setNewEmail(loginData.email);
  }

  if (email) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-header">
            <img src="favicon.png" alt="logo"></img>
            <h3>Awards</h3>
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <small className="forget-block">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                name="rememberMe"
                onChange={handleChange}
              ></input>
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <Link to="/resetpassword">Forgot password?</Link>
          </small>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Sign In
          </button>
        </form>
        <small>
          No Account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </>
  );
}

export default LoginPage;
