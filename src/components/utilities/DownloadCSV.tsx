import React from 'react';
import dayjs from 'dayjs';
import { CSVLink } from 'react-csv';
import { toast } from 'react-toastify';
import { UserData } from '../../types/interface';

interface DownloadCSVProps {
  users: UserData[];
}

export default function DownloadCSV({ users }: DownloadCSVProps): JSX.Element {
  const headers = Object.keys(users[0] || []);
  const date = dayjs().format('MMMM D, YYYY h:mm A');

  const downloadCSV = () => {
    toast.info('Successfully download csv!', {
      className: 'toast-message',
    });
  };

  return (
    <div className='d-flex ml-auto p-2 float-right'>
      <CSVLink data={users} headers={headers} filename={`main_table_${date}.csv`} onClick={downloadCSV}>
        Download CSV
      </CSVLink>
    </div>
  );
}
