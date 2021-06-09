import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from '../services/ApiService';

const ViewUser = () => {
  const { userId } = useParams();
  const [userByID, setUserByID] = useState('');

  useEffect(() => {
    const getUserID = async () => {
      const getUser = await getUserById(userId);
      setUserByID(getUser);
    };

    getUserID();
  }, [userId]);

  return (
    <div className='container'>
      <div className='py-4 d-flex'>
        <h1>View User</h1>

        <div className='d-flex ml-auto p-2'>
          <Link
            type='submit'
            className='btn btn-outline-warning pull-right'
            to='/Application'
          >
            Back to application
          </Link>
        </div>
      </div>

      <ul className='list-group text-left'>
        <li className='list-group-item text-info'>Name: {userByID.name}</li>
        <li className='list-group-item text-info'>
          User name: {userByID.username}
        </li>
        <li className='list-group-item text-info'>Email: {userByID.email}</li>
        <li className='list-group-item text-info'>Phone: {userByID.phone}</li>
      </ul>
      <br />
      <ul className='list-group text-left'>
        <li className='list-group-item text-info'>Street: {userByID.street}</li>
        <li className='list-group-item text-info'>Suite: {userByID.suite}</li>
        <li className='list-group-item text-info'>City: {userByID.city}</li>
        <li className='list-group-item text-info'>Zipcode: {userByID.zipcode}</li>
      </ul>
      <br />
      <ul className='list-group text-left'>
        <li className='list-group-item text-info'>
          Company: {userByID.company}
        </li>
        <li className='list-group-item text-info'>
          Website: {userByID.website}
        </li>
        <li className='list-group-item text-info'>Comment: {userByID.bs}</li>
      </ul>
    </div>
  );
};

export default ViewUser;
