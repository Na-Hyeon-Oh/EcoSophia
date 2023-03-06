import React, { useState } from 'react';
import { CalendarProps } from '../CalendarProps.';
import { Icon } from '@iconify/react';
import { format, addDays, subDays } from 'date-fns';
import Card from '../../../../../components/card/Card';
import NumberUtils from '../../../../../../assets/utils/NumberUtils';

import styles from '../calendar.module.css';
import style from './dailyCalendar.module.css';

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
            {RenderCells()}
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

const RenderCells = () => {
    const testData = [
        {
            date: new Date(),
            by: "현금",
            contents: "월급",
            price: 1956400,
            tags: [
            ]
        },
        {
            date: new Date(),
            by: "현금",
            contents: "OutDak",
            price: -25500,
            tags: [
                {
                    id: 1,
                    name: "식비"
                }
            ]
        },
    ]
    let incomeCards = [];
    let expenseCards = [];
    for (let i = 0; i < testData.length; i++) {
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

    return (
        <div className ={style.cells_container}>
            <div>{incomeCards}</div>
            <div>{expenseCards}</div>
        </div>

    );
};

export default CustomDailyCalender