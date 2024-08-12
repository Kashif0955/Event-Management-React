import React from 'react'
import { eventList } from '../../database/Events'
import './searcheventList.css'
import EventCart from '../EventCart/EventCart'


const SearchEventList = ({ monthYear }) => {
  const { selectedMonth, selectedYear } = monthYear;
  const filteredEvents = eventList.filter((eventDetail) => {
    return (
      eventDetail.date.year === selectedYear &&
      eventDetail.date.month === selectedMonth
    )
  })

  const renderEventCards = () => {
    return filteredEvents.map(({ id, date, heading, location, img }) => {
      return (
        <EventCart
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      )
    })
  }

  return (
    <>

      <div className='event-search'> {
        filteredEvents.length > 0 ? (
          renderEventCards()
        ) : (
          <p>No Event In The Date</p>
        )
      }
      </div>
    </>

  )
}

export default SearchEventList