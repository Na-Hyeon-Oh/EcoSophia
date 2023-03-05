import React, { useState } from 'react';
import { CalendarProps } from '../CalendarProps.';
import { Icon } from '@iconify/react';
import { format, addWeeks, subWeeks } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { differenceInCalendarDays, isSameMonth, isSameDay, addDays, getISOWeek } from 'date-fns';

import styles from '../calendar.module.css'

const CustomWeeklyCalender = ({ todayDT, setTodayDT, currentDT, setCurrentDT, selectedDate, setSelectedDate }: CalendarProps) => {
    const prevWeek = () : void => {
        setCurrentDT(subWeeks(currentDT, 1));
    };
    const nextWeek = () : void => {
        setCurrentDT(addWeeks(currentDT, 1));
    };

    const onDateClick = (day : Date) : void => {
        setSelectedDate(day);
    };

    return (
        <div className={styles.custom_calender}>
            {RenderHeader(currentDT, prevWeek, nextWeek)}
            {RenderDays()}
            {RenderCells(todayDT, currentDT, selectedDate, onDateClick)}
        </div>
    );
};

const RenderHeader = (currentDT : Date, prevWeek : any, nextWeek : any) => {
    return (
        <div className={styles.header_container}>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevWeek} />
            </div>
            <div className={styles.middle}>
                {format(currentDT, 'yyyy.MM')}
            </div>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextWeek} />
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

const RenderCells = ( todayDT: Date, currentDT : Date, selectedDate : Date, onDateClick : any ) => {
    const monthStart = startOfMonth(currentDT);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(currentDT);
    const endDate = endOfWeek(currentDT);

    let days = [];
    let day = startDate;
    let formattedDate = '';
    for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
            <div
                className = {styles.cell
                    + ` ${differenceInCalendarDays(day, todayDT) === 0 ? styles.today : ''}`
                    + ` ${!isSameMonth(day, monthStart) ? ''
                        : isSameDay(day, selectedDate) ? styles.selected
                            : format(currentDT, 'M') !== format(day, 'M') ? styles.invalid : ''}`}
                key = {day.toString()}
                onClick = {() => onDateClick(cloneDay)}
            >
                <div className = {styles.cell_container}>
                        <span className = {format(currentDT, 'M') !== format(day, 'M') ? styles.invalid : ''}>
                            {formattedDate}
                        </span>
                </div>
            </div>
        );
        day = addDays(day, 1);
    }

    return (
        <div className ={styles.cells_container}>
            <div className ={styles.cells_row} key = {day.toString()}>{days}</div>
        </div>
    );
};

export default CustomWeeklyCalender;