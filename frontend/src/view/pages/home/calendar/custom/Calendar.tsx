import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

import { CalendarProps } from './CalendarProps.';
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { differenceInCalendarDays, isSameMonth, isSameDay, addDays } from 'date-fns';
import NumberUtils from '../../../../../assets/utils/NumberUtils';
import History from '../../../../../model/History';

import styles from './calendar.module.css'

const CustomCalender = ({ todayDT, setTodayDT, currentDT, setCurrentDT, selectedDate, setSelectedDate, onChangeSearchDate}: CalendarProps) => {
    const prevMonth = () : void => {
        setCurrentDT(subMonths(currentDT, 1));
    };
    const nextMonth = () : void => {
        setCurrentDT(addMonths(currentDT, 1));
    };

    const onDateClick = (day : Date) : void => {
        setSelectedDate(day);
    };

    onChangeSearchDate(currentDT);

    return (
        <div className={styles.custom_calender}>
            {RenderHeader(currentDT, prevMonth, nextMonth)}
            {RenderDays()}
            {RenderCells(todayDT, currentDT, selectedDate, onDateClick)}
        </div>
    );
};

const RenderHeader = (currentDT : Date, prevMonth : any, nextMonth : any) => {
    return (
        <div className={styles.header_container}>
            <div className={styles.arrow_navigator}>
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
            </div>
            <div className={styles.middle}>
                {format(currentDT, 'yyyy.MM')}
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

const RenderCells = ( todayDT: Date, currentDT : Date, selectedDate : Date, onDateClick : any) => {
    const history = useSelector((state: RootState) => state.history);
    const filter = useSelector((state: RootState) => state.filter.selectedMethods);

    if (history.isLoading) {
        return <div>Loading...</div>;
    }
    else if (history.error != null) {
        alert("잠시 후에 다시 접속해주세요.");
        window.location.href = "/sign-in";
    }
    else {
        const monthStart = startOfMonth(currentDT);
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
                let incomeSum: number = 0;
                let expenseSum: number = 0;
                for (let i = 0; i < history.data.length; i++) {
                    let filtered = true
                    for (let j = 0; j < filter.length; j++ ) {
                        if (filter[j].id == history.data[i].method.id && filter[j].name == history.data[i].method.name) {
                            filtered = false
                            break
                        }
                    }
                    if (!filtered) {
                        if (isSameDay(new Date(cloneDay), new Date(history.data[i].date))) {
                            if (history.data[i].cost > 0) incomeSum += history.data[i].cost;
                            else expenseSum += history.data[i].cost;
                        }
                    }
                }
                let income: string = NumberUtils(incomeSum.toString()).addComma();
                let expense: string = NumberUtils(expenseSum.toString()).addComma();
                days.push(
                    <div
                        className = {styles.cell
                            + ` ${differenceInCalendarDays(day, todayDT) === 0 ? styles.today : ''}`
                            + ` ${!isSameMonth(day, monthStart) ? ''
                                : isSameDay(day, selectedDate) ? styles.selected
                                    : !isSameMonth(currentDT, day) ? styles.invalid : ''}`}
                        key = {day.toString()}
                        onClick = {() => onDateClick(cloneDay)}
                    >
                        <div className = {styles.cell_container}>
                        <span className = {format(currentDT, 'M') !== format(day, 'M') ? styles.invalid : ''}>
                            {formattedDate}
                        </span>
                            <div className={isSameMonth(currentDT, day) ? styles.histories : styles.invalid_histories} >
                                <div className={incomeSum > 0 ? styles.history_income : styles.invalid_history}>+{income}</div>
                                <div className={expenseSum < 0 ? styles.history_expense : styles.invalid_history}>{expense}</div>
                            </div>
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
        return <div className={styles.cells_container}>{rows}</div>;
    }
};

export default CustomCalender