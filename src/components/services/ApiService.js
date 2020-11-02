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

export const sendNewUser = async (formData) => {
    return await api.post(`/users`, formData)
    
        .then(({data})=> data)
                        
        .catch(err => console.log(err));
}


export const deleteUserById = async (userId) => {
    return await api.delete(`/users/${userId}`)
        .then(({data}) => data)

        .catch(err => console.log(err));
}