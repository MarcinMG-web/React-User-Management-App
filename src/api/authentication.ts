import { IRegisterNewUser, INewUserCredentials } from '../types/interface';
import { api } from './apiConfig';

/**
 * Authentication
 */

export const registerNewUser = async (newUserCredentials: IRegisterNewUser) => {
  try {
    return await api
      .post('/auth', newUserCredentials)

      .then(({ data }) => data);
  } catch (error) {
    throw new Error(`Network response was not ok ${error}`);
  }
};

export const loginUser = async (loginParams: INewUserCredentials) => {
  try {
    let login = false;
    return await api
      .get('/auth')

      .then(({ data }) => {
        const users = data.filter(
          (user: INewUserCredentials) => user?.name === loginParams.name && user?.password === loginParams.password,
        );

        if (users.length > 0) {
          sessionStorage.setItem('name', loginParams.name);
          sessionStorage.setItem('token', btoa(`${loginParams.name}${loginParams.password}`));

          login = true;
        } else {
          alert('Try again to get access !');
        }

        return login;
      });
  } catch (error) {
    throw new Error(`Network response was not ok ${error}`);
  }
};
