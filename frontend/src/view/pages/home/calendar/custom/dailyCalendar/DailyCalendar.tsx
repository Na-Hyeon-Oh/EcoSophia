import React, { useState } from 'react';
import { CalendarProps } from '../CalendarProps.';
import { Icon } from '@iconify/react';
import { format, addDays, subDays, isSameDay } from 'date-fns';
import Card from '../../../../../components/card/Card';
import NumberUtils from '../../../../../../assets/utils/NumberUtils';

import {testData} from '../../../../../../assets/testData';

import styles from '../calendar.module.css';
import style from './dailyCalendar.module.css';

const CustomDailyCalender = ({ todayDT, setTodayDT, selectedDate, setSelectedDate, onChangeSearchDate }: CalendarProps) => {
    const prevDay = () : void => {
        setSelectedDate(subDays(selectedDate, 1));
    };
    const nextDay = () : void => {
        setSelectedDate(addDays(selectedDate, 1));
    };

    onChangeSearchDate(selectedDate);

    return (
        <div className={styles.custom_calender}>
            {RenderHeader(selectedDate, prevDay, nextDay)}
            {RenderCells(selectedDate)}
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

const RenderCells = (selectedDT: Date) => {
    let incomeCards = [];
    let expenseCards = [];
    for (let i = 0; i < testData.length; i++) {
        if (isSameDay(testData[i].date, selectedDT)) {
            let date: string = format(testData[i].date, "yyyy-MM-dd eee");
            let price: string = NumberUtils(testData[i].price.toString()).addComma();
            if(testData[i].price > 0)
                incomeCards.push(
                    <Card smallLeftText={date} smallRightText={testData[i].by} leftText={testData[i].contents} rightText={price} tags={testData[i].tags} color={"#FF0000"}/>
                );
            else
                expenseCards.push(
                    <Card smallLeftText={date} smallRightText={testData[i].by} leftText={testData[i].contents} rightText={price} tags={testData[i].tags} color={"#0018FF"}/>
                );
        }
    }

    return (
        <div>
            <div className={style.message_container}
                style={{display: incomeCards.length === 0 && expenseCards.length === 0 ? "block": "none"}}>
                수익/지출 내역이 존재하지 않습니다.
            </div>
            <div className ={style.cells_container}>
                <div className={style.cells_column}>{incomeCards}</div>
                <div className={style.cells_column}>{expenseCards}</div>
            </div>
        </div>

    );
};

export default CustomDailyCalender