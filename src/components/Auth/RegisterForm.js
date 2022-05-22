import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../store/login/action';
import {registerActions} from '../../store/register/action'
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.register.registering);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(registerActions.register(user));
    }
  }

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleChange}
            className={
              'form-control' +
              (submitted && !user.firstName ? ' is-invalid' : '')
            }
          />
          {submitted && !user.firstName && (
            <div className="invalid-feedback">First Name is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleChange}
            className={
              'form-control' +
              (submitted && !user.lastName ? ' is-invalid' : '')
            }
          />
          {submitted && !user.lastName && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className={
              'form-control' +
              (submitted && !user.username ? ' is-invalid' : '')
            }
          />
          {submitted && !user.username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className={
              'form-control' +
              (submitted && !user.password ? ' is-invalid' : '')
            }
          />
          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
          {registering && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Register
          </button>
          <Link to="/login" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;