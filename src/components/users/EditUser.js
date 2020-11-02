import React from 'react'
import { Link } from 'react-router-dom'

const EditUser = () => {
    return (
        <div className = 'container' >
            <div className = 'py-4 d-flex' >
                    <h1>Edit Users</h1>

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
        </div>
    )
}

export default EditUser
