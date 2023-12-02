import React, { ChangeEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { registerNewUser } from '../../services/apiService';

export default function Registration(): JSX.Element {
  const [isRegister, setRegister] = useState(false);
  const [registerCredentials, setRegisterCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRegisterCredentials({
      ...registerCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitRegistration = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const name = registerCredentials.name;
    const email = registerCredentials.email;
    const password = registerCredentials.password;

    if (name && password && email) {
      await registerNewUser(registerCredentials);
      setRegister(true);
    } else {
      alert('Try register to get access !');
    }
  };

  if (isRegister) {
    return <Redirect from='/' to='/login' />;
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Register Page</h1>
        <span className='text-danger'>Welcome to my application! </span>
      </div>

      <form className='mt-5' onSubmit={onSubmitRegistration} autoComplete='off'>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>User name:</label>
          <input
            type='text'
            className='form-control'
            name='name'
            aria-describedby='emailHelp'
            placeholder='Enter your name'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Email:</label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Enter your email'
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password:</label>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='Enter your password'
            onChange={handleChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            Never share your password with anyone else.
          </small>
        </div>

        <div className='col text-center '>
          <Link
            type='submit'
            className='btn btn-outline-info  px-10 py-2 m-4'
            to='./'
          >
            Back to Home
          </Link>
          <button
            className='btn btn-outline-warning  px-10 py-2'
            type='submit'
            value='Register'
          >
            Register Me!
          </button>
        </div>
      </form>
    </div>
  );
}
