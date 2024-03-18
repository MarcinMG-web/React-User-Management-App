import React, { useState, useEffect } from 'react';

import { IRouteParams } from '../../types/interface';
import { Redirect, Link } from 'react-router-dom';
import { IInitialUser } from '../../helpers/initialValues';
import { spinner, stopSpinner } from '../utilities/spinner';
import { deleteUserById, getAllUsers } from '../../api/user';
import { toast } from 'react-toastify';
import { CSVLink } from 'react-csv';
import dayjs from 'dayjs';

export default function Application(): JSX.Element {
  const [users, setUsers] = useState([]);
  const [isLogout, setIsLogout] = useState(false);

  const [queryText, setQueryText] = useState('');

  const nameFromSessionStorage = sessionStorage.getItem('name');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (): Promise<void> => {
    const users = await getAllUsers();
    setUsers(users);
  };

  const deleteUser = async (userId: IRouteParams['userId']): Promise<void> => {
    await deleteUserById(userId);
    getUsers();

    toast.info('Successfully deleted user!', {
      className: 'toast-message',
    });
  };

  const isSignOut = (): void => {
    sessionStorage.clear();
    setIsLogout(true);

    toast.info('Successfully logged out!', {
      className: 'toast-message',
    });
  };

  // Sort
  const isSortClick = (properties: keyof IInitialUser): void => {
    spinner();

    const compare = (value1: IInitialUser, value2: IInitialUser): number => {
      switch (true) {
        case properties && value1[properties] < value2[properties]:
          return -1;

        case properties && value1[properties] > value2[properties]:
          return 1;

        default:
          return 0;
      }
    };

    const user = users.sort(compare).slice();
    stopSpinner();
    setUsers(user);
  };
  // Search
  const search = (arrayOfUsers: IInitialUser[]): IInitialUser[] => {
    const trimQueryText = queryText.toLowerCase().trim();

    return arrayOfUsers.filter(
      (user) =>
        user.name.toLowerCase().indexOf(trimQueryText) > -1 ||
        user.company.toLowerCase().indexOf(trimQueryText) > -1 ||
        user.email.toLowerCase().indexOf(trimQueryText) > -1 ||
        user.phone.toLowerCase().indexOf(trimQueryText) > -1,
    );
  };

  if (isLogout) {
    return <Redirect to='/' />;
  }

  // CSV
  const headers = Object.keys(users[0] || {});
  const date = dayjs().format('MMMM D, YYYY h:mm A');
  const downloadCSV = () => {
    toast.info('Successfully download csv!', {
      className: 'toast-message',
    });
  };

  return (
    <div className='container'>
      <span className='text-danger'>{`Welcome ${nameFromSessionStorage}`}</span>
      <div className='py-4 d-flex justify-content-between'>
        <div className='d-flex  p-2'>
          <button type='submit' className='btn btn-outline-secondary btn-sm' onClick={isSignOut}>
            Log out
          </button>
        </div>

        <h4 className='d-flex ml-auto p-2'>Main Application</h4>

        <div className='d-flex ml-auto p-2 text-center'>
          <Link type='submit' className='btn btn-outline-primary mr-2 p-2 btn-sm ' to='./calendar'>
            Calendar
          </Link>
          <Link type='submit' className='btn btn-outline-warning p-2 btn-sm ' to='./users/AddNewUser'>
            Add new +
          </Link>
        </div>
      </div>

      <div className='d-flex ml-auto p-2 float-right'>
        <CSVLink data={users} headers={headers} filename={`main_table_${date}.csv`} onClick={downloadCSV}>
          Download CSV
        </CSVLink>
      </div>

      <input
        type='text'
        className='form-control mt-3 mb-4'
        placeholder='Search ...'
        name='search'
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
        autoComplete='off'
      />
      <div id='spinner' className='loading'></div>
      <div className='dataTable'>
        <div className='scrollContainer'>
          <div className='table-responsive text-center '>
            <table className='table table-striped table-dark text-center align-items-center'>
              <thead>
                <tr>
                  <th>#</th>
                  <th scope='col' className='headingTable' onClick={() => isSortClick('name')}>
                    Name
                  </th>
                  <th scope='col' className='headingTable' onClick={() => isSortClick('company')}>
                    Company
                  </th>
                  <th scope='col' className='headingTable' onClick={() => isSortClick('email')}>
                    Email
                  </th>
                  <th scope='col' className='headingTable' onClick={() => isSortClick('phone')}>
                    Phone
                  </th>
                  <th scope='col' className='actionHeadingTable'>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {search(users).map((user, index) => (
                  <tr key={user.id}>
                    <th scope='row'>{index + 1}</th>
                    <td className='columnTable'>{user.name}</td>
                    <td className='columnTable'>{user.company}</td>
                    <td className='columnTable'>{user.email}</td>
                    <td className='columnTable'>{user.phone}</td>
                    <td className='actionRow px-0 py-0'>
                      <Link className='btn btn-outline-success mr-2 mt-2 btn-sm' to={`/users/ViewUser/${user.id}`}>
                        View
                      </Link>
                      <Link className='btn btn-outline-light mr-2 mt-2 btn-sm' to={`/users/EditUser/${user.id}`}>
                        Edit
                      </Link>
                      <Link
                        className='btn btn-outline-danger mt-2 btn-sm'
                        onClick={() => deleteUser(user.id)}
                        to={'/application'}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
