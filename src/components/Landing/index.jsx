import React from 'react';
import './style.css';

const Landing = () => (
  <>
    <div className="container">
      <div>
        <h1>Description:</h1>
        <p>
          This is a demo yet under construction. It aims to develop the
          following products:
        </p>
        <p>
          <b>Web Admin page</b> &#9658; To create / manage employees and
          schedules into a company that offers car-wash service.
        </p>
        <p>
          <b>Mobile App</b> &#9658; Where employees can register their
          respective attendances among other information regarding the given
          services throughout the day.
        </p>
        <br />
        <p>
          These are the current available modules, check them out! :) <br />
          <br />
          <div className="grid-container">
            <div className="grid-item">
              &#9658; Sign In (user: admin@gmail.com / password: admin123)
            </div>
            <div className="grid-item">
              &#9658; Sign Up (It can be a fake email)
            </div>
            <div className="grid-item">&#9658; Employee</div>
            <div className="grid-item">&#9658; Schedule</div>
            <div className="grid-item">&#9658; Attendance</div>
          </div>
          <br />
        </p>
      </div>
      <div className="item3">
        <h1>Technologies used:</h1>
        <p>
          &#9658; <b>MongoDB</b> as database
        </p>
        <p>
          &#9658; <b>Sequelize</b> as ORM
        </p>
        <p>
          &#9658; <b>GraphQL</b> for modeling APIs
        </p>
        <p>
          &#9658; <b>Apollo Server</b> As a link between the GraphQL Schema and
          the http server
        </p>
        <p>
          &#9658; <b>Apollo Client</b> As the client-side library that leverages
          GraphQL API to fetch and handle data served to the front end.
        </p>
        <p>
          &#9658; <b>ReactJS</b> to build the UI
        </p>
        <p>
          &#9658; <b>Firebase</b> To handle the authentication and authorization
          layers
        </p>
      </div>
    </div>
    <div className="container">
      <div className="item4">
        <h1>How to use it:</h1>
        <p>Step 1, create an employee</p>
        <p>Step 2, create a schedule</p>
        <p>Step 3, associate one or many employees to a schedule</p>
        <p>
          Step 4, go to attendance module in order to see the turns not yet
          started and the ones already finished.
        </p>
        <p>
          Step 5, use the mobile app through which employees allocated in a
          schedule can start it or finish it. This app is yet under
          construction.
        </p>
      </div>
    </div>
  </>
);

export default Landing;
