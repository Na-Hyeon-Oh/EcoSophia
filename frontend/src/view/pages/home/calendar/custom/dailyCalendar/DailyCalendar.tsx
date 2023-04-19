import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../redux/store';

import { CalendarProps } from '../CalendarProps.';
import { Icon } from '@iconify/react';
import { format, addDays, subDays, isSameDay } from 'date-fns';
import AccordionCard from '../../../../../components/accordionCard/AccordionCard';
import NumberUtils from '../../../../../../assets/utils/NumberUtils';
import History from '../../../../../../model/History';

import { tagList } from '../../../../../../assets/tagList/tagList';
import Tag from '../../../../../../model/Tag';

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
    const history = useSelector((state: RootState) => state.history);

    if (history.isLoading) {
        return <div>Loading...</div>;
    }
    else if (history.error != null) {
        alert("잠시 후에 다시 접속해주세요.");
        window.location.href = "/sign-in";
    }
    else {
        let incomeCards = [];
        let expenseCards = [];
        for (let i = 0; i < history.data.length; i++) {
            if (isSameDay(new Date(history.data[i].date), new Date(selectedDT))) {
                let price: string = NumberUtils(history.data[i].cost.toString()).addComma();
                let tags: Array<Tag> = history.data[i].tags.map(tagName => {
                    for (let i = 0; i < tagList.length; i++) {
                        if (tagList[i].name == tagName) {
                            return tagList[i];
                        }
                    }
                    return null;
                }).filter(tag => tag !== undefined) as Tag[];

                if (history.data[i].cost > 0)
                    incomeCards.push(
                        <div className={style.card}>
                            <AccordionCard smallLeftText={history.data[i].date.toString()} smallRightText={history.data[i].method.name}
                                           leftText={history.data[i].content} rightText={price} tags={tags}
                                           color={"#FF0000"}/>
                        </div>
                    );
                else
                    expenseCards.push(
                        <div className={style.card}>
                            <AccordionCard smallLeftText={history.data[i].date.toString()} smallRightText={history.data[i].method.name}
                                           leftText={history.data[i].content} rightText={price} tags={tags}
                                           color={"#0018FF"}/>
                        </div>
                    );
            }
        }

        return (
            <div>
                <div className={style.message_container}
                     style={{display: incomeCards.length === 0 && expenseCards.length === 0 ? "block" : "none"}}>
                    수익/지출 내역이 존재하지 않습니다.
                </div>
                <div className={style.cells_container}>
                    <div className={style.cells_column}>{incomeCards}</div>
                    <div className={style.cells_column}>{expenseCards}</div>
                </div>
            </div>

        );
    }
};

export default CustomDailyCalender