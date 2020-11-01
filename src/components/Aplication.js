import React from 'react'

const Aplication = () => {
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
     
                <table class="table table-striped table-light">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            </div>
    )
}

export default Aplication
