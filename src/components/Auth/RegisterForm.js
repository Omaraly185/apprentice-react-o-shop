import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });

  const { submitted, setSubmitted } = useState(false);

  const { firstname, lastname, username, password } = inputs;

  const onSubmit = () => {
    setSubmitted(Event.target.value);
    console.log('submit');
  };
  const onChange = (event) => {
    const { name } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: event.target.value }));
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Register</h2>
      <form name="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={firstname}
            onChange={onChange}
            className={
              'form-control' + (submitted && !firstname ? 'is-invalid' : '')
            }
            required
          />
          {submitted && !firstname && (
            <div className="invalid-feedback">Firstname is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={lastname}
            onChange={onChange}
            className={
              'form-control' + (submitted && !lastname ? 'is-invalid' : '')
            }
            required
          />
          {submitted && lastname && (
            <div className="invalid-feedback">LastName is required</div>
          )}
        </div>
        {submitted && !lastname && (
          <div className="invalid-feedback">Username is required</div>
        )}
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
            required
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className={
              'form-control' + (submitted && !password ? 'is-invalid' : '')
            }
            required
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
          <Link to="/Login" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
