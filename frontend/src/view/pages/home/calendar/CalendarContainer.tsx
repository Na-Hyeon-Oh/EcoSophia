import React, { useState } from "react";

import CustomCalendar from './custom/Calendar';
import CustomWeeklyCalendar from './custom/WeeklyCalendar';
import CustomDailyCalendar from './custom/DailyCalendar';
import { CalendarType } from '../../../../assets/enums/CalendarType';

import styles from './calendar.module.css';

const CalendarContainer = ({ option } : CalendarContainerProps) => {
    const [todayDT, setTodayDT] = useState(new Date());
    const [currentDT, setCurrentDT] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const calendarType = () => {
        switch(option) {
            case CalendarType.MONTHLY:
                return <CustomCalendar todayDT={todayDT} setTodayDT={setTodayDT} currentDT={currentDT} setCurrentDT={setCurrentDT} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>;
            case CalendarType.WEEKLY:
                return <CustomWeeklyCalendar todayDT={todayDT} setTodayDT={setTodayDT} currentDT={currentDT} setCurrentDT={setCurrentDT} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            case CalendarType.DAILY:
                return <CustomDailyCalendar todayDT={todayDT} setTodayDT={setTodayDT} currentDT={currentDT} setCurrentDT={setCurrentDT} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            default:
                return null;
        }
    };

    return (
        <div className = {styles.calendar}>
            <CalendarTopDesign/>
            { calendarType() }
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

interface CalendarContainerProps {
    option: CalendarType;
}

export default CalendarContainer