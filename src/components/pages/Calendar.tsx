import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  getAllEvents,
  deleteEventById,
  postNewEvent,
} from '../../services/apiService';

import FullCalendar, { DatePointApi, EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar(): JSX.Element {
  const { push } = useHistory();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async (): Promise<void> => {
    const dataEvents = await getAllEvents();
    setEvents(dataEvents);
  };

  const deleteEvent = async (eventId: string): Promise<void> => {
    await deleteEventById(eventId);
  };

  const handleDateClick = (info: EventClickArg): void => {
    const infoDelete = window.confirm('Are you sure to delete this record?');

    if (infoDelete) {
      info.event.remove();

      deleteEvent(info.event.id);
    }
  };

  const clickDate = (info: DatePointApi): void => {
    const title = prompt('Event Title:');

    if (title) {
      postNewEvent({
        title: title,
        date: info.dateStr,
      });
    }

    push('/calendar');
    getEvents();
  };

  return (
    <div className='container'>
      <div className='py-4 d-flex'>
        <h1>Calendar</h1>

        <div className='d-flex ml-auto p-2'>
          <Link
            type='submit'
            className='btn btn-outline-warning  pull-right'
            to='../Application'
          >
            Back to application
          </Link>
        </div>
      </div>

      <small id='emailHelp' className='form-text text-muted'>
        Set day to add event
      </small>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventClick={handleDateClick}
        dateClick={clickDate}
      />
    </div>
  );
}
