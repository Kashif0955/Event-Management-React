import React from 'react';
import './Eventcart.css';
import { Link } from 'react-router-dom';

const EventCart = ({ id, date, heading, location, img }) => {
  // Destructure year and month from the date object
  const { year, month } = date;

  return (
    <Link to={`/events/${id}`} className="card-link">
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year: {year}</span>
            <span>Month: {month}</span>
          </p>
          <p>{location}</p>
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt="Event" />
        </div>
      </div>
    </Link>
  );
};

export default EventCart;
