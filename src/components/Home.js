import React from 'react'

const Home = () => {
    return (
        <div className = 'container'>
            <div className = 'py-4' >
                <h1>Home Page</h1>
                <span className="text-danger" >Welcome to my aplication! </span>
            </div>

            <form className = 'mt-5' >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter your email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Enter your password" 
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                
                <div className="col text-center">
                    <button 
                        type="submit" 
                        className="btn btn-warning px-10 py-2"
                    >
                        Let's get started 
                    </button>
                </div>
               
            </form>

        </div>
    )
}

export default Home
