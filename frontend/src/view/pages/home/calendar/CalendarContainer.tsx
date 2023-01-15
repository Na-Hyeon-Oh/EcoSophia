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
            <li className = {styles.option + ` ${selectedOption == CalendarType.MONTHLY ? styles.selected : ''}`}
                key = {CalendarType.MONTHLY}
                onClick = {() => onClick(CalendarType.MONTHLY)}> Monthly </li>
            <li className = {styles.option + ` ${selectedOption == CalendarType.WEEKLY ? styles.selected : ''}`}
                key = {CalendarType.WEEKLY}
                onClick = {() => onClick(CalendarType.WEEKLY)}> Weekly </li>
            <li className = {styles.option + ` ${selectedOption == CalendarType.DAILY ? styles.selected : ''}`}
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