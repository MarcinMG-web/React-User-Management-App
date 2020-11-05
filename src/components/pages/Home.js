import React  from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className = 'container'>
            <div className = 'py-4' >
                <h1>Home Page</h1>
                <span className="text-danger" >Welcome to my aplication! </span>
            </div>

            <form className = 'mt-5'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = "fname"
                        aria-describedby="emailHelp" 
                        placeholder="Enter your name" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Enter your password"
                    />
                        <small id="emailHelp" className="form-text text-muted">Never share your password with anyone else.</small>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                
                <div className="col text-center ">
                    <Link 
                        className="btn btn-warning px-10 py-2"
                        to = './Aplication'
                        value = "Submit"
                    >
                        Let's get started 
                    </Link>
                </div>
               
            </form>

        </div>
    )
}

export default Home
