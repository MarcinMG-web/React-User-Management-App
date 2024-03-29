import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { IRouteParams } from '../../types/interface';
import { initialUser } from '../../helpers/initialValues';
import { putNewUserById, getUserById } from '../../api/user';
import { toast } from 'react-toastify';

export default function EditUser(): JSX.Element {
  const { push } = useHistory();
  const { userId } = useParams<IRouteParams>();

  const [newUser, setNewUser] = useState(initialUser);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await putNewUserById(userId, newUser);

    push('/application');

    toast.info('Successfully edit user!', {
      className: 'toast-message',
    });
  };

  const loadUser = async (): Promise<void> => {
    const result = await getUserById(userId);
    setNewUser(result);
  };

  const { name, username, email, street, suite, city, zipcode, phone, website, company, bs } = newUser;

  return (
    <div className='container'>
      <div className='py-4 d-flex'>
        <h1>Edit user</h1>

        <div className='d-flex ml-auto p-2'>
          <Link type='submit' className='btn btn-outline-warning pull-right' to='/application'>
            Back to application
          </Link>
        </div>
      </div>

      <small id='emailHelp' className='form-text text-muted py-2'>
        Enter all of input element to edit user:
      </small>

      <form onSubmit={(e) => handleSubmitForm(e)}>
        <span>Main information:</span>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter name...'
            name='name'
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter user name...'
            name='username'
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email...'
            name='email'
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter phone...'
            name='phone'
            value={phone}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <span>Address:</span>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter street...'
            name='street'
            value={street}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter suite...'
            name='suite'
            value={suite}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter city...'
            name='city'
            value={city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter zipcode...'
            name='zipcode'
            value={zipcode}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <span>Company:</span>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter company...'
            name='company'
            value={company}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter website...'
            name='website'
            value={website}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter comments...'
            name='bs'
            value={bs}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='panel-body'>
          <button className='btn btn-outline-secondary btn-block' type='submit'>
            Edit user
          </button>
        </div>
      </form>
    </div>
  );
}
