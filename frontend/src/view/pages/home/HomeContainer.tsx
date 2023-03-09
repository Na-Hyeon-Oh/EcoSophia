import React, { useState } from "react";

import OptionContainer from './option/OptionContainer';
import { Method } from '../../../model/Method';
import { MethodType } from '../../../assets/enums/MethodType';
import { CalendarType } from '../../../assets/enums/CalendarType';
import CalendarContainer from './calendar/CalendarContainer';
import AddHistoryContainer from './addHistory/AddHistoryContainer';
import ReportContainer from './report/ReportContainer';

import styles from './home.module.css';

const HomeContainer = () => {
    const methodList : Array<Method> = [
        {
            id: 0,
            userId: 1,
            type: MethodType.Cash,
            name: "현금"
        },
        {
            id: 1,
            userId: 1,
            type: MethodType.Card,
            name: "우리은행/우리SumCheck카드"
        },
    ];
    const [filter, setFilter] = useState<Array<Method>>([
        {
            id: 0,
            userId: 1,
            type: MethodType.Cash,
            name: "현금"
        },
        {
            id: 1,
            userId: 1,
            type: MethodType.Card,
            name: "우리은행/우리SumCheck카드"
        },
    ]);
    const [calendarOption, setCalendarOption] = useState(CalendarType.MONTHLY);
    const [searchDate, setSearchDate] = useState(new Date());

    const onClickCalendarOption = (option : CalendarType) : void => {
        setCalendarOption(option);
    };

    const onChangeSearchDate = (date: Date) => {
        setSearchDate(date);
    }

    return (
        <div className = {styles.home_container}>
            <div className = {styles.home_left_container}>
                <OptionContainer methodList={methodList} filter={filter} onChangeFilter={setFilter} calendarOption={calendarOption} onClickCalendarOption={onClickCalendarOption}/>
                <CalendarContainer option={calendarOption} onChangeSearchDate={onChangeSearchDate}/>
            </div>
            <div className = {styles.home_right_container}>
                <ReportContainer calendarOption={calendarOption} searchDate={searchDate}/>
                <AddHistoryContainer/>
            </div>
        </div>
    )
}

export default HomeContainer;