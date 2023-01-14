import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import styles from './calendar.module.css'

import { CalendarType } from '../../../../../assets/enums/CalendarType';

const CustomCalender = (props: any) => {
    const [option, setOption] = useState(CalendarType.MONTHLY);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () : void => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () : void => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onDateClick = (day : Date) : void => {
        setSelectedDate(day);
    };

    return (
        <div className={styles.custom_calender}>
            {RenderHeader(currentMonth, prevMonth, nextMonth)}
            {RenderDays()}
            {RenderCells(currentMonth, selectedDate, onDateClick)}
        </div>
    );
};

const RenderHeader = (currentMonth : Date, prevMonth : any, nextMonth : any) => {
    return (
        <div className={styles.header_container}>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
            </div>
            <div className={styles.middle}>
                {format(currentMonth, 'yyyy.MM')}
            </div>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
            </div>
        </div>
    );
};

const RenderDays = () => {
    const days = [];
    const list = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className = {styles.day} key={i}>
                {list[i]}
            </div>
        );
    }

    return <div className={styles.days_row}>{days}</div>;
};

const RenderCells = ( currentMonth : Date, selectedDate : Date, onDateClick : any ) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                    className = {styles.cell
                        + ` ${isSameDay(day, currentMonth) ? 'today' : ''}`
                        + ` ${!isSameMonth(day, monthStart) ? '' 
                            : isSameDay(day, selectedDate) ? 'selected' 
                                : format(currentMonth, 'M') !== format(day, 'M') ? 'not-valid' : 'valid'}`}
                    key = {day.toString()}
                    onClick = {() => onDateClick(cloneDay)}
                >
                    <div className = {styles.cell_container}>
                        <span className = {format(currentMonth, 'M') !== format(day, 'M') ? 'not-valid' : ''}>
                            {formattedDate}
                        </span>
                    </div>
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className ={styles.cells_row} key = {day.toString()}>
                {days}
            </div>
        );
        days = [];
    }
    return <div className ={styles.cells_container}>{rows}</div>;
};

export default CustomCalender