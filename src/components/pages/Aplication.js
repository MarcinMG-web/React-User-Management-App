import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { getAllUsers, deleteUserById } from '../services/ApiService';

const Aplication = () => {
  const [users, setUsers] = useState([]);
  const [islogout, setIslogout] = useState(false);

  const [q, setQ] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const dataUsers = await getAllUsers();
    setUsers(dataUsers);
  };

  const deleteUser = async (userId) => {
    await deleteUserById(userId);
    getUsers();
  };

  const isSignOut = () => {
    localStorage.removeItem('token');
    setIslogout(true);
  };

  // Sort
  const isSortClick = (properties) => {
    function compare(a, b) {
      spinner();
      if (a[properties] < b[properties]) {
        return -1;
      }
      if (a[properties] > b[properties]) {
        return 1;
      }
      return 0;
    }
    stopSpinner();
    const user = users.sort(compare).slice();

    setUsers(user);
  };

  // Spiner
  const spinner = () => {
    document.getElementById('spinner').style.display = 'flex';
  };
  const stopSpinner = () => {
    const spinnerDelay = () => {
      document.getElementById('spinner').style.display = 'none';
    };
    setTimeout(spinnerDelay, 500);
  };

  // Serch
  const search = (rows) => {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(q) > -1 ||
        row.company.toLowerCase().indexOf(q) > -1 ||
        row.email.toLowerCase().indexOf(q) > -1 ||
        row.phone.toLowerCase().indexOf(q) > -1
    );
  };

  if (islogout) {
    return <Redirect to='/' />;
  }

  return (
    <div className='container'>
      <div className='py-4 d-flex justify-content-between'>
        <div className='d-flex  p-2'>
          <button
            type='submit'
            className='btn btn-outline-secondary '
            onClick={isSignOut}
          >
            Log out
          </button>
        </div>

        <h3 className='d-flex ml-auto p-2'>Main Aplication</h3>

        <div className='d-flex ml-auto p-2'>
          <Link
            type='submit'
            className='btn btn-outline-primary mr-2'
            to='./calendary'
          >
            Calendary
          </Link>
          <Link
            type='submit'
            className='btn btn-outline-warning   '
            to='./users/AddNewUser'
          >
            Add new +
          </Link>
        </div>
      </div>

      <input
        type='text'
        className='form-control mt-4 mb-4'
        placeholder='Search ...'
        name='search'
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete='off'
      />

      <div id='spinner' className='loading'></div>

      <div className='table-responsive text-center '>
        <table className='table table-striped table-dark text-center align-items-center'>
          <thead>
            <tr>
              <th>#</th>
              <th
                scope='col'
                className='headingTable'
                onClick={() => isSortClick('name')}
              >
                Name
              </th>
              <th
                scope='col'
                className='headingTable'
                onClick={() => isSortClick('company')}
              >
                Company
              </th>
              <th
                scope='col'
                className='headingTable'
                onClick={() => isSortClick('email')}
              >
                Email
              </th>
              <th
                scope='col'
                className='headingTable'
                onClick={() => isSortClick('phone')}
              >
                Phone
              </th>
              <th scope='col'>Action</th>
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
                <td>
                  <Link
                    className='btn btn-outline-success mr-2'
                    to={`/users/ViewUser/${user.id}`}
                  >
                    {' '}
                    View
                  </Link>
                  <Link
                    className='btn btn-outline-light mr-2'
                    to={`/users/EditUser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className='btn btn-outline-danger mr-2'
                    onClick={() => deleteUser(user.id)}
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
  );
};

export default Aplication;
