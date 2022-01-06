import React, { useEffect, useState } from 'react';
import { loginAction} from '../../store/login/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const { submitted, setSubmitted } = useState(false);

  const { username, password } = inputs;
  const dispatch=useDispatch();
  useEffect (()=> {
    dispatch(loginAction.logout());
  }, [dispatch]);

  function onChange(event) {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }
  function onSubmit(event) {
    event.preventDefault()
    setSubmitted(true);
    if (username && password) {
      dispatch(loginAction.login(username,password));
    }
  }
  
  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Login</h2>
      <form name="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            className={
              'form-control' + (submitted && !username ? 'is-invalid' : '')
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
            onChange={onChange}
            className={
              'form-control' + (submitted && !password ? 'is-invalid' : '')
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">login</button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
