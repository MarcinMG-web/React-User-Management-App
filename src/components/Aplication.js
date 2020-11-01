import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getAllUsers } from '../services/ApiService'

const Aplication = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const dataUsers = await getAllUsers();
            console.log(dataUsers)
            setUsers(dataUsers)
        }
        getUsers()
    },[])

    return (
        <div className = 'container' >
            
            <div className = 'py-4 d-flex' >
                <h1>Main Aplication</h1>

                <div className = "d-flex ml-auto p-2" >
                    <button 
                        type="submit" 
                        className = "btn btn-warning  pull-right"
                    >
                        Add new + 
                    </button>
                </div>
            </div>

            <div className = "table-responsive" >
                <table className = "table table-striped table-dark " >
                    <thead>
                        <tr>
                            <th >#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    
                    <tbody >
                        {users.map(user =>
                            <tr key = {user.id}>
                                <th scope="row" >{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className = "btn btn-success">View</Link>
                                    <Link className = "btn btn-light">Edit</Link>
                                    <Link className = "btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        )}   
                    </tbody>
                    
                </table>
            </div>

        </div>
    )
}

export default Aplication
