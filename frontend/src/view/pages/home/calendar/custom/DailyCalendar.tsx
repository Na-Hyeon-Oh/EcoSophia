import React, { useState } from 'react';
import { CalendarProps } from './CalendarProps.';
import { Icon } from '@iconify/react';
import { format, addDays, subDays } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { differenceInCalendarDays, isSameMonth, isSameDay } from 'date-fns';

import styles from './calendar.module.css'

const CustomDailyCalender = ({ todayDT, setTodayDT, selectedDate, setSelectedDate }: CalendarProps) => {
    const prevDay = () : void => {
        setSelectedDate(subDays(selectedDate, 1));
    };
    const nextDay = () : void => {
        setSelectedDate(addDays(selectedDate, 1));
    };

    return (
        <div className={styles.custom_calender}>
            {RenderHeader(selectedDate, prevDay, nextDay)}
            {RenderCells(todayDT, selectedDate)}
        </div>
    );
};

const RenderHeader = (selectedDT : Date, prevDay : any, nextDay : any) => {
    return (
        <div className={styles.header_container}>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevDay} />
            </div>
            <div className={styles.middle}>
                {format(selectedDT, 'yyyy.MM.dd eee')}
            </div>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextDay} />
            </div>
        </div>
    );
};

const RenderCells = ( todayDT: Date, selectedDate : Date ) => {

    return <div className ={styles.cells_container}></div>;
};

export default CustomDailyCalender