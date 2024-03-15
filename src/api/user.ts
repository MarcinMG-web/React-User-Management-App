import { IInitialUser } from '../helpers/initialValues';
import { IRouteParams } from '../types/interface';
import { api } from './apiConfig';

/**
 * API User
 */

export const getAllUsers = async () =>
  await api
    .get('/users')
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });

export const postNewUser = async (newUser: IInitialUser) =>
  await api
    .post('/users', newUser)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });

export const getUserById = async (userId: IRouteParams['userId']) =>
  await api
    .get(`/users/${userId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });

export const putNewUserById = async (userId: IRouteParams['userId'], newUser: IInitialUser) =>
  await api
    .put(`/users/${userId}`, newUser)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });

export const deleteUserById = async (userId: IRouteParams['userId']) =>
  await api
    .delete(`/users/${userId}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });
