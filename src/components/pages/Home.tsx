import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Welcome to my application!</h1>
        <span className='text-danger'>
          Choose the direction you are interested in
        </span>
      </div>

      <div className=' text-center p-5'>
        <div className='p-3'>
          <Link
            to='/login'
            type='submit'
            className='btn btn-outline-warning btn-lg'
          >
            Login
          </Link>
        </div>

        <div className='p-3'>
          <Link
            to='/register'
            type='submit'
            className='btn btn-outline-light btn-lg'
          >
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
}
