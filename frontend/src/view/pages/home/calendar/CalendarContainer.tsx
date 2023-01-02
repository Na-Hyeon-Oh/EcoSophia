import React from "react"

import styles from './calendar.module.css'

const CalendarContainer = () => {
    return (
        <div className = {styles.calendar_container}>
            <Option/>
            <Calendar/>
        </div>
    )
}

const Option = () => {
    return (
        <div className = {styles.option_container}>
            <li> Monthly </li>
            <li> Weekly </li>
            <li> Daily </li>
        </div>
    )
}

const Calendar = () => {
    return (
        <div className = {styles.calendar}>
            <CalendarTopDesign/>
        </div>
    )
}

const CalendarTopDesign = () => {
    return (
        <div className = {styles.calendar_top_design}>
            <div></div>
            <div id = {"black"}></div>
        </div>
    )
}

export default CalendarContainer