import React, {useState}  from 'react'
import {Redirect} from 'react-router-dom'

const Home = () => {

    const [islogged, setIslogged] = useState(false)
    const [loginParams, setLoginParams] = useState({
        name:'',
        password: ''
    })

    const handleChange = (e) => {
        
        setLoginParams({
            ...loginParams,
            [e.target.name]: e.target.value,
        })
    }

    const isLogin = (e) => {

        let name = loginParams.name;
        let password = loginParams.password;

        if (name === 'admin' && password === '123') {
            localStorage.setItem('token', 'T');
            setIslogged(true);
        } else {
            alert('Try again to get acces !')
        }
        
        e.preventDefault();
    }

    if (islogged) {
            return <Redirect from="/" to="/Aplication" /> ;
    }

    return (
        <div className = 'container'>
            <div className = 'py-4' >
                <h1>Home Page</h1>
                <span className="text-danger" >Welcome to my aplication! </span>
            </div>

            <form className = 'mt-5' onSubmit = { isLogin } >
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
                        <small id="emailHelp" className="form-text text-muted">
                            Never share your password with anyone else.
                        </small>
                </div>
                             
                <div className="col text-center ">
                    <button 
                        className="btn btn-warning px-10 py-2"
                        type = 'submit'
                        value = 'Login'
                    >
                        Let's get started 
                    </button>
                </div>
               
            </form>

        </div>
    )
}

export default Home