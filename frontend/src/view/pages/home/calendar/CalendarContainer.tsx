import React, { useState } from "react";

import CustomCalendar from './custom/Calendar';
import CustomWeeklyCalendar from './custom/weeklyCalendar/WeeklyCalendar';
import CustomDailyCalendar from './custom/dailyCalendar/DailyCalendar';
import { CalendarType } from '../../../../assets/enums/CalendarType';

import styles from './calendar.module.css';

const CalendarContainer = ({ option, onChangeSearchDate } : CalendarContainerProps) => {
    const [todayDT, setTodayDT] = useState(new Date());
    const [currentDT, setCurrentDT] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const calendarType = () => {
        switch(option) {
            case CalendarType.MONTHLY:
                return <CustomCalendar
                    todayDT={todayDT} setTodayDT={setTodayDT}
                    currentDT={currentDT} setCurrentDT={setCurrentDT}
                    selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                    onChangeSearchDate={onChangeSearchDate}
                />;
            case CalendarType.WEEKLY:
                return <CustomWeeklyCalendar
                    todayDT={todayDT} setTodayDT={setTodayDT}
                    currentDT={currentDT} setCurrentDT={setCurrentDT}
                    selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                    onChangeSearchDate={onChangeSearchDate}
                />
            case CalendarType.DAILY:
                return <CustomDailyCalendar
                    todayDT={todayDT} setTodayDT={setTodayDT}
                    currentDT={currentDT} setCurrentDT={setCurrentDT}
                    selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                    onChangeSearchDate={onChangeSearchDate}
                />
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
    onChangeSearchDate: (date: Date) => void;
}

export default CalendarContainer