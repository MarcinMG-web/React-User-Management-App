import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import {  postNewUser, getUserById, postUserById } from '../services/ApiService'

const EditUser = () => {

let history = useHistory();

const {userId} = useParams();


const initUser = {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: ''
}

const [newUser, setNewUser] = useState(initUser)

const handleChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
    })
}

useEffect(() => {
    loadUser()
},[])

const handleSubmitForm = async(e) => {
    e.preventDefault();
    console.log(newUser)

    await postNewUser(newUser)  
    history.push('/aplication')
   
}

const loadUser = async () => {
    const result = await getUserById(userId)
    console.log('result', result)
    setNewUser(result)

}

    return (
        <div className = 'container'>
                <div className = 'py-4 d-flex' >
                    <h1>Edit user</h1>

                    <div className = "d-flex ml-auto p-2" >
                        <Link 
                            type="submit" 
                            className = "btn btn-warning  pull-right"
                            to = '/Aplication'
                        >
                            Back to aplication 
                        </Link>
                    </div>
                </div>

            <small id="emailHelp" className="form-text text-muted py-4">
            Enter all of input element to edit user:
            </small>

        <form onSubmit = {handleSubmitForm} >
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your name..."
                    name={'name'}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your user name..."
                    name={'username'}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your email..."
                    name={'email'}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your phone..."
                    name={'phone'}
                    onChange={handleChange}
                />
            </div>

                <div className = "panel-body" >
                    <button 
                        className="btn btn-outline-secondary btn-block" 
                        type="submit">
                            Edit user
                    </button>
                </div>
        </form>
    </div>

        
)}

export default EditUser
