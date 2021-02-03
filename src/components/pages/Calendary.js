import React from 'react'
import { Link } from 'react-router-dom'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export const Calendary = () => {

    return (
       <div className = 'container'>
                <div className = 'py-4 d-flex' >
                    <h1>Calendary</h1>

                    <div className = "d-flex ml-auto p-2" >
                        <Link 
                            type="submit" 
                            className = "btn btn-outline-warning  pull-right"
                            to = '../Aplication'
                        >
                            Back to aplication 
                        </Link>
                    </div>
                </div>
            
            {/* Calendary */}

            <FullCalendar
                plugins = {[dayGridPlugin ]}
                initialView="dayGridMonth"
                
            />


        </div>
    )
}
