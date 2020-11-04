import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3003/`
})

export const getAllUsers = async () => {
    try {
        return await api.get(`/users`)
        .then(({data}) => data);

    } catch (err) {
        console.log(err)
    }
}

export const postNewUser = async (newUser) => {
    return await api.post(`/users`, newUser)
    
        .then(({data})=> data)
                        
        .catch(err => console.log(err));
}

export const getUserById = async (userId) => {
    return await api.get(`/users/${userId}`)
    
        .then(({data})=> data)
                        
        .catch(err => console.log(err));
}


export const deleteUserById = async (userId) => {
    return await api.delete(`/users/${userId}`)
        .then(({data}) => data)

        .catch(err => console.log(err));
}