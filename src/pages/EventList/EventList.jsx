import React from 'react';
import './Eventlist.css';
import { eventList } from "../../database/Events";
import EventCart from '../../components/EventCart/EventCart';
// import Header from '../../components/Navigation/Header'
const EventList = () => {

    const RenderEvents = () => {
        return eventList.map(({ id, heading, date, location, img }) => {
            return (
                <EventCart
                    key={id}
                    id={id}
                    date={date}
                    heading={heading}
                    location={location}
                    img={img}
                />

            );
        });
    };

    return (
        <div>
     
        <div className="event-list-wrapper">
          <div className="event-list">
            {eventList.length > 0 ? (
              RenderEvents()
            ) : (
              <p>No events available</p>
            )}
          </div>
        </div>
      </div>
    )
}




export default EventList