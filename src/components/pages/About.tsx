import React from 'react';

export default function About(): JSX.Element {
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>About Application</h1>
        <p className='lead py-4'>
          Welcome to the React User Management App, a powerful and user-friendly
          application designed for managing user information efficiently. This
          application is built using React, providing a modern and responsive
          user interface for seamless user interaction.
        </p>

        <h3>Key Features:</h3>
        <p>
          1. User Registration and Authentication Registration Panel: Easily
          register new users with a dedicated registration panel. Login
          Functionality: Secure authentication system allowing users to log in
          with their credentials.
        </p>
        <p>
          2. User Management User Listing: View a comprehensive list of
          registered users with essential information. CRUD Operations: Perform
          Create, Read, Update, and Delete operations on user records
          effortlessly.
        </p>
        <p>
          3. Responsive Design Modern UI: Intuitive and visually appealing user
          interface. Mobile-Friendly: Responsive design ensures a seamless
          experience across various devices.
        </p>
      </div>
    </div>
  );
}
