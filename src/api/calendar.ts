import { api } from './apiConfig';

/**
 * API Calendar
 */

export const getAllEvents = async () =>
  await api
    .get('/events')
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(`Network response was not ok ${error}`);
    });

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
