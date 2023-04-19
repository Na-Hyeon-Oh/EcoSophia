import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

import Chart from './chart/Chart';
import { CalendarType } from '../../../../assets/enums/CalendarType';
import { isSameMonth, isSameWeek, isSameDay } from 'date-fns';
import NumberUtils from '../../../../assets/utils/NumberUtils';

import styles from './report.module.css';

const ReportContainer = ({ calendarOption, searchDate } : ReportProps) => {
    return (
        <div className = {styles.report_container}>
            <Title/>
            <Report calendarOption={calendarOption} searchDate={searchDate}/>
        </div>
    )
}

const Title = () => {
    return (
        <div className = {styles.report_title_container}>
            Report
        </div>
    )
}

const Report = ({calendarOption, searchDate}: ReportProps) => {
    const history = useSelector((state: RootState) => state.history);

    if (history.isLoading) {
        return <div className={styles.report}>
            <div>Loading...</div>
        </div>;
    }
    else if (history.error != null) {
        return <div>Error</div>;
    }
    else {
        let incomeSum: number = 0;
        let expenseSum: number = 0;
        for (let i = 0; i < history.data.length; i++) {
            let isContained: boolean = false;
            if (calendarOption === CalendarType.MONTHLY) {
                if (isSameMonth(new Date(searchDate), new Date(history.data[i].date))) isContained = true;
            }
            else if (calendarOption === CalendarType.WEEKLY) {
                if (isSameWeek(new Date(searchDate), new Date(history.data[i].date))) isContained = true;
            }
            else if (calendarOption === CalendarType.DAILY) {
                if (isSameDay(new Date(searchDate), new Date(history.data[i].date))) isContained = true;
            }

            if (isContained) {
                if (history.data[i].cost > 0) incomeSum += history.data[i].cost;
                else expenseSum += history.data[i].cost;
            }
        }
        return (
            <div className={styles.report}>
                <div className={styles.report_income_expenditure_part}>
                    <div>
                        <div>수입</div>
                        <div className={styles.report_income}>{NumberUtils(incomeSum.toString()).addComma()}</div>
                    </div>
                    <div>
                        <div>지출</div>
                        <div className={styles.report_expenditure}>{NumberUtils(expenseSum.toString()).addComma()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

interface ReportProps {
    calendarOption: CalendarType;
    searchDate: Date;
}

export default ReportContainer