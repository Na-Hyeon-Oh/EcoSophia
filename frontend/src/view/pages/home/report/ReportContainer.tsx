import React from "react";
import Chart from './chart/Chart';
import { CalendarType } from '../../../../assets/enums/CalendarType';
import { isSameMonth, isSameWeek, isSameDay } from 'date-fns';
import NumberUtils from '../../../../assets/utils/NumberUtils';
import { testData } from '../../../../assets/testData';

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
    let incomeSum: number = 0;
    let expenseSum: number = 0;
    for (let i = 0; i < testData.length; i++) {
        let isContained: boolean = false;
        if (calendarOption === CalendarType.MONTHLY) {
            if (isSameMonth(searchDate, testData[i].date)) isContained = true;
        }
        else if (calendarOption === CalendarType.WEEKLY) {
            if (isSameWeek(searchDate, testData[i].date)) isContained = true;
        }
        else if (calendarOption === CalendarType.DAILY) {
            if (isSameDay(searchDate, testData[i].date)) isContained = true;
        }

        if (isContained) {
            if (testData[i].price > 0) incomeSum += testData[i].price;
            else expenseSum += testData[i].price;
        }
    }
    return (
        <div className = {styles.report}>
            <div className = {styles.report_income_expenditure_part}>
                <div>
                    <div>수입</div>
                    <div className = {styles.report_income}>{NumberUtils(incomeSum.toString()).addComma()}</div>
                </div>
                <div>
                    <div>지출</div>
                    <div className = {styles.report_expenditure}>{NumberUtils(expenseSum.toString()).addComma()}</div>
                </div>
            </div>
        </div>
    )
}

interface ReportProps {
    calendarOption: CalendarType;
    searchDate: Date;
}

export default ReportContainer