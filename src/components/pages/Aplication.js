import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getAllUsers, deleteUserById } from '../services/ApiService'

const Aplication = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        
        getUsers()
        
    },[])

    const getUsers = async () => {
         const dataUsers = await getAllUsers();
         setUsers(dataUsers)
     }


    const deleteUser = async (userId) => {
        await deleteUserById(userId);
        getUsers()
    }

    const isSortClick = (properties) => {
        function compare(a, b) {
            spinner()
            if (a[properties] < b[properties]) {
                return -1;
            }
            if (a[properties] > b[properties]) {
                return 1;
            }
            return 0;
        }
        stopSpinner()
        const user = users.sort(compare).slice();
       
       setUsers(user)
       
    }

    // Spiner
    const spinner = () => {
      document.getElementById('spinner').style.display = "flex";
    }
    const stopSpinner = ()  => {
        const spinnerDelay = () => {
            document.getElementById('spinner').style.display = "none";
        }
        setTimeout(spinnerDelay, 500);
    }


    return (
        <div className = 'container' >
            
            <div className = 'py-4 d-flex' >
                <h1>Main Aplication</h1>

                <div className = "d-flex ml-auto p-2" >
                    <Link 
                        type="submit" 
                        className = "btn btn-warning  pull-right"
                        to = './users/AddNewUser'
                    >
                        Add new + 
                    </Link>
                </div>
            </div>

            <div id="spinner" className="loading"></div>

            <div className = "table-responsive text-center " >
                <table className = "table table-striped table-dark " >
                    <thead>
                        <tr>
                            <th >#</th>
                            <th scope="col" 
                                className = 'headingTable' 
                                onClick={() => isSortClick('name')}
                                >Name
                            </th>
                            <th scope="col"
                                className = 'headingTable'
                                onClick={() => isSortClick('username')}
                                >User Name
                            </th>
                            <th scope="col" 
                                className = 'headingTable'
                                onClick={() => isSortClick('email')} 
                                >Email
                            </th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    
                    <tbody >
                        {users.map((user, index) =>
                            <tr key = {user.id}>
                                <th scope="row" >{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link 
                                        className = "btn btn-success mr-2"
                                        to = {`/users/ViewUser/${user.id}`}
                                        >View
                                    </Link>
                                    <Link 
                                        className = "btn btn-light mr-2" 
                                        to = {`/users/EditUser/${user.id}`}
                                        >
                                            Edit
                                    </Link>
                                    <Link 
                                        className = "btn btn-danger mr-2"
                                        onClick = {() => deleteUser(user.id)}
                                        >
                                            Delete
                                    </Link>
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
