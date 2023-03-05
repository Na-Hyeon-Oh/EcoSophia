import React, { useState } from "react";

import Option from './option/Option';
import { CalendarType } from '../../../assets/enums/CalendarType';
import CalendarContainer from './calendar/CalendarContainer';
import AddHistoryContainer from './addHistory/AddHistoryContainer';
import ReportContainer from './report/ReportContainer';

import styles from './home.module.css';

const HomeContainer = () => {
    const [option, setOption] = useState(CalendarType.MONTHLY);

    const onOptionClick = (option : CalendarType) : void => {
        setOption(option);
    };

    return (
        <div className = {styles.home_container}>
            <div className = {styles.home_left_container}>
                <Option selectedOption={option} onClick={onOptionClick}/>
                <CalendarContainer option={option}/>
            </div>
            <div className = {styles.home_right_container}>
                <ReportContainer option={option}/>
                <AddHistoryContainer/>
            </div>
        </div>
    )
}

export default HomeContainer;