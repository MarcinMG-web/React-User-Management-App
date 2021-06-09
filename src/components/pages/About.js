import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='py-4'>
        <h1>About Application</h1>

        <p className='lead py-4'>
            Created React routing application, single page application. CRUD.
          <br />
          <br />
            User set the input box (username and password) and identified manually
            (without API and JWT tokens). Then checks if the user and password
            match, the user will be automatically transferred on the main
            application. Application includes protection for a page. The rendering
            component will check whether the localstorage item already has the
            token item ? If yes, the route will continue on the destination
            page. Otherwise, react will call the Redirect component to redirect to
            the login page.
          <br />
          <br />
            In the application you may to open the table when data import from
            json - server. Is possible to created new object, edit or deleted.
            Additionally, after clicking on the table header, the data is sorted
            alphabetically according to the values in the column you clicked.
          <br />
          <br />
            Application includes searcher. User may filter data JSON in table by key words.
          <br />
          <br />
            React application using: React router, json-server, Bootstrap and
            JavaScript.
        </p>
      </div>
    </div>
  );
};

export default About;
