import axios from 'axios';
import { IInitialUser } from '../helpers/initialValues';
import { INewUserCredentials, IRegisterNewUser, IRouteParams } from '../interface/interface';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  timeout: 1000,
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
});

/**
 * API Authentication
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
/**
 * API User
 */

export const getAllUsers = async () => {
  try {
    return await api.get('/users').then(({ data }) => data);
  } catch (error) {
    throw new Error(`Network response was not ok ${error}`);
  }
};

export const postNewUser = async (newUser: IInitialUser) => {
  return await api
    .post('/users', newUser)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
};

export const getUserById = async (userId: IRouteParams['userId']) => {
  return await api
    .get(`/users/${userId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
};

export const putNewUserById = async (userId: IRouteParams['userId'], newUser: IInitialUser) => {
  return await api
    .put(`/users/${userId}`, newUser)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
};

export const deleteUserById = async (userId: IRouteParams['userId']) => {
  return await api
    .delete(`/users/${userId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
};

/**
 * API Calendar
 */

export const getAllEvents = async () => {
  try {
    return await api.get('/events').then(({ data }) => data);
  } catch (error) {
    throw new Error(`Network response was not ok ${error}`);
  }
};

export const postNewEvent = async (newEvent: { title: string; date: string }) => {
  return await api
    .post('/events/', newEvent)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
};

export const deleteEventById = async (eventId: string) => {
  return await api
    .delete(`/events/${eventId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
};
