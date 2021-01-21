import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getUserById, putNewUserById } from '../services/ApiService'

const EditUser = () => {

    let history = useHistory();

    const {userId} = useParams();

    const initUser = {
        id: '',
        name: '',
        username: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        phone: '',
        website: '',
        company: '',
        catchPhrase: '',
        bs: ''
    }

    const [newUser, setNewUser] = useState(initUser)
    const {
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        phone,
        website,
        company,
        bs,
    } = newUser;

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        loadUser()
    },[])

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        await putNewUserById(userId, newUser) 
        history.push('/aplication')
    
    }

    const loadUser = async () => {
        const result = await getUserById(userId)
        setNewUser(result)
    }

    return (
        <div className = 'container'>
                <div className = 'py-4 d-flex' >
                    <h1>Edit user</h1>

                    <div className = "d-flex ml-auto p-2" >
                        <Link 
                            type="submit" 
                            className = "btn btn-outline-warning pull-right"
                            to = '/Aplication'
                        >
                            Back to aplication 
                        </Link>
                    </div>
                </div>

            <small id="emailHelp" className="form-text text-muted py-2">
                Enter all of input element to edit user:
            </small>

        <form onSubmit = {e => handleSubmitForm(e)} >

            <span>Main inforamtion:</span>

            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter name..."
                    name='name'
                    value={name}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter user name..."
                    name='username'
                    value={username}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email..."
                    name='email'
                    value={email}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter phone..."
                    name='phone'
                    value={phone}
                    onChange={e => handleChange(e)}
                />
            </div>

            <span>Address:</span>

            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter street..."
                    name = 'street'
                    value={street}
                    onChange={e => handleChange(e)}
                />
            </div> 
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter suite..."
                    name = 'suite'
                    value={suite}
                    onChange={e => handleChange(e)}
                />
            </div> 
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter city..."
                    name = 'city'
                    value={city}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter zipcode..."
                    name = 'zipcode'
                    value={zipcode}
                    onChange={e => handleChange(e)}
                />
            </div>

            <span>Company:</span>

            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter company..."
                    name = 'company'
                    value={company}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter website..."
                    name = 'website'
                    value={website}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter comments..."
                    name = 'bs'
                    value={bs}
                    onChange={e => handleChange(e)}
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
