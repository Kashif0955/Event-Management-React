import React, { useState, useCallback } from 'react'
import FilterBox from '../../components/FilterBox/FilterBox'
import SearchEventList from '../../components/SearchEventList/SearchEventList'

const EventFilter = () => {

  const [monthYear, setMonthYear] = useState({
    selectedMonth: "null",
    selectedYear: "null"
  })

  const getMonthYear = useCallback((selectedMonth, selectedYear) => {
    setMonthYear({ selectedYear, selectedMonth })
    // console.log(selectedYear, selectedMonth);
  }, [])

  return (

    <div className="find-events-wrapper">
      <FilterBox getMonthYear={getMonthYear} />
      <SearchEventList monthYear={monthYear} />
    </div>

  )
}
export default EventFilter
