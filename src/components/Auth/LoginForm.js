import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/login/action';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(loginActions.login(username, password));
    }
  }

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            className={
              'form-control' + (submitted && !username ? ' is-invalid' : '')
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className={
              'form-control' + (submitted && !password ? ' is-invalid' : '')
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;