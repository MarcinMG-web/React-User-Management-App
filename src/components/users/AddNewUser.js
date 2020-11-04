import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { postNewUser } from '../services/ApiService'

const AddNewUser = () => {

let history = useHistory()

const initUser = {
    id:'',
    name:'',
    username:'',
    email:'',
    phone:''
}

const [newUser, setNewUser] = useState(initUser)

const handleChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value.trim()
    })
}

const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(newUser)

    const setNewUserForFrom = async () => {
        await postNewUser(newUser) // 
        history.push('/aplication')
    }

    setNewUserForFrom()
}

    return (
        <div className = 'container'>
                <div className = 'py-4 d-flex' >
                    <h1>Add new user</h1>

                    <div className = "d-flex ml-auto p-2" >
                        <Link 
                            type="submit" 
                            className = "btn btn-warning  pull-right"
                            to = '../Aplication'
                        >
                            Back to aplication 
                        </Link>
                    </div>
                </div>

            <small id="emailHelp" className="form-text text-muted py-4">
            Enter all of input element to add new user:
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
                            Add user
                    </button>
                </div>
        </form>
    </div>

        
)}

export default AddNewUser
