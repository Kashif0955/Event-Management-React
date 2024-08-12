import React, { useEffect, useState } from 'react'
import './Filterbox.css'

const FilterBox = ({ getMonthYear }) => {
    const [selectedMonth, setselectedMonth] = useState("January");
    const [selectedYear, setselectedYear] = useState(2023);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const years = [2023, 2024, 2025]

    const MonthstoDisplay = () => {
        return months.map((month, index) => {
            return (
                <option key={index} value={month} >
                    {month}
                </option>
            )
        });
    }

    const YearstoDisplay = () => {
        return years.map((year, index) => {
            return (
                <option key={index} value={year}>
                    {year}
                </option>
            )
        })
    }

    const handleMonthchange = (e) => {
        setselectedMonth(e.target.value);
    }

    const handleYearChange = (e) => {
        setselectedYear(Number(e.target.value));
    }

  
 
    useEffect(()=>{
        const updateParent=()=>{
            getMonthYear(selectedMonth,selectedYear)
        }
        updateParent()
    },[selectedMonth,selectedYear,getMonthYear])

    return (
        <div>
            <form className="filter-card" >
                <div className="wrapper">
                    <div className="date">
                        <label htmlFor="month">Month : </label>
                        <select
                            value={selectedMonth}
                            onChange={handleMonthchange}
                        >
                            {MonthstoDisplay()}
                        </select>
                    </div>
                    <div className="date">
                        <label htmlFor="year">Year : </label>
                        <select
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            {YearstoDisplay()}
                        </select>
                    </div>
                </div>
              
            </form>

        </div>
    )
}

export default FilterBox