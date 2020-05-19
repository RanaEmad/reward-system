import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className="login-container">
        <form className="login-form">
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
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          <small className="forget-block">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              ></input>
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <Link>Forgot password?</Link>
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
          No Account? <Link>Sign up</Link>
        </small>
      </div>
    </>
  );
}

export default LoginPage;
