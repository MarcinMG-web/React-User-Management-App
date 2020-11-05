import React from 'react'

const About = () => {
    return (
        <div className = 'container'>
            <div className='py-4'>

                <h1>About Aplication</h1>

                <p className="lead">
                  Created React routing application, single page application. CRUD. 
                <br /><br />
                  Three in one. If you open the application After login to the alication you may to open the table when data importr from db services. Is possible to created new object, edit or deleted.
                <br /><br />
                  Additionally, after clicking on the table header, the data is sorted alphabetically according to the values in the column you clicked.
                <br /><br />
                  The user gets the impression that the operation is being performed by animating the appearance of sorted data.
                <br /><br />
                  React application using: React router, db service Bootstrap and JasvaScript.
                </p>
                
            </div>
        </div>
    )
}

export default About
