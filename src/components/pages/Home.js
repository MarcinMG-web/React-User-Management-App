import React, {useState}  from 'react'
import {Link} from 'react-router-dom'

const Home = () => {


const [isAcces, setIsAcces] = useState({
    name:'',
    password: ''
})

const handleChange = (e) => {
    setIsAcces({
        [e.target.name]: e.target.value,
    })
    console.log(isAcces)
}

const login = (e) => {
    e.preventDefault();
    console.log('isAcces',isAcces)
    console.log('login')
    
   

   
}

    return (
        <div className = 'container'>
            <div className = 'py-4' >
                <h1>Home Page</h1>
                <span className="text-danger" >Welcome to my aplication! </span>
            </div>

            <form className = 'mt-5' onSubmit = { login } >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name = 'name'
                        aria-describedby="emailHelp" 
                        placeholder="Enter your name"
                        onChange = {handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name = 'password'
                        placeholder="Enter your password"
                        onChange = {handleChange}
                    />
                        <small id="emailHelp" className="form-text text-muted">Never share your password with anyone else.</small>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                
                <div className="col text-center ">
                    <button  // Link
                        className="btn btn-warning px-10 py-2"
                        // to = './Aplication'
                        value = "Submit"
                       
                    >
                        Let's get started 
                    </button>
                </div>
               
            </form>

        </div>
    )
}

export default Home