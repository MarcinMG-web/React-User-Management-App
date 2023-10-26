import React, { ChangeEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Home(): JSX.Element {
  const [isLogIn, setIsLogIn] = useState(false);
  const [loginParams, setLoginParams] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLoginParams({
      ...loginParams,
      [e.target.name]: e.target.value,
    });
  };

  const isLogin = (): void => {
    let name = loginParams.name;
    let password = loginParams.password;

    if (name === 'admin' && password === '123') {
      localStorage.setItem('token', 'T');
      setIsLogIn(true);
    } else {
      alert('Try again to get access !');
    }
  };

  if (isLogIn) {
    return <Redirect from='/' to='/application' />;
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
        <span className='text-danger'>Welcome to my application! </span>
      </div>

      <form className='mt-5' onSubmit={isLogin} autoComplete='off'>
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
          <button
            className='btn btn-outline-warning  px-10 py-2'
            type='submit'
            value='Login'
          >
            Let's get started
          </button>
        </div>
      </form>
    </div>
  );
}
