import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3003/`
})

/**
 * API User
 */

export const getAllUsers = async () => {
    try {
        return await api.get(`/users`)
            .then(({
                data
            }) => data);

    } catch (err) {
        console.log(err)
    }
}

export const postNewUser = async (newUser) => {
    return await api.post(`/users`, newUser)

        .then(({
            data
        }) => data)

        .catch(err => console.log(err));
}


export const getUserById = async (userId) => {
    return await api.get(`/users/${userId}`)

        .then(({
            data
        }) => data)

        .catch(err => console.log(err));
}

export const putNewUserById = async (userId, newUser) => {
    return await api.put(`/users/${userId}`, newUser)

        .then(({
            data
        }) => data)

        .catch(err => console.log(err));
}

export const deleteUserById = async (userId) => {
    return await api.delete(`/users/${userId}`)
        .then(({
            data
        }) => data)

        .catch(err => console.log(err));
}

/**
 * API Events
 */

export const getAllEvents = async () => {
    try {
        return await api.get(`/events`)
            .then(({
                data
            }) => data);

    } catch (err) {
        console.log(err)
    }
}

export const postNewEvent = async (newEvent) => {
    return await api.post(`/events/`, newEvent)

        .then(({
            data
        }) => data)

        .catch(err => console.log(err));
}

export const deleteEventById = async (eventId) => {
    return await api.delete(`/events/${eventId}`)
        .then(({
            data
        }) => data)

        .catch(err => console.log(err));
}