import React, { useState } from "react"

import CustomCalendar from './custom/Calendar'
import styles from './calendar.module.css'
import { CalendarType } from '../../../../assets/enums/CalendarType';

const CalendarContainer = (props : any) => {
    const [calendarOption, setCalendarOption] = useState(CalendarType.MONTHLY);

    const onCalendarOptionClick = (option : string) : void => {
        setCalendarOption(option);
    };

    return (
        <div className = {styles.calendar_container}>
            { Option(calendarOption, onCalendarOptionClick) }
            <Calendar />
        </div>
    )
}

const Option = ( selectedOption : any, onClick : any ) => {
    return (
        <div className = {styles.option_container}>
            <li className = {selectedOption == CalendarType.MONTHLY ? styles.option_selected : styles.option}
                key = {CalendarType.MONTHLY}
                onClick = {() => onClick(CalendarType.MONTHLY)}> Monthly </li>
            <li className = {selectedOption == CalendarType.WEEKLY ? styles.option_selected : styles.option}
                key = {CalendarType.WEEKLY}
                onClick = {() => onClick(CalendarType.WEEKLY)}> Weekly </li>
            <li className = {selectedOption == CalendarType.DAILY ? styles.option_selected : styles.option}
                key = {CalendarType.DAILY}
                onClick = {() => onClick(CalendarType.DAILY)}> Daily </li>
        </div>
    )
}

const Calendar = () => {
    return (
        <div className = {styles.calendar}>
            <CalendarTopDesign/>
            <CustomCalendar/>
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