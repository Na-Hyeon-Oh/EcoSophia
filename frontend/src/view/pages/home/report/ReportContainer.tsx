import React from "react";
import Chart from './chart/Chart';
import { CalendarType } from '../../../../assets/enums/CalendarType';

import styles from './report.module.css';

const ReportContainer = ({ option } : ReportContainerProps) => {
    return (
        <div className = {styles.report_container}>
            <Title/>
            <Report/>
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

const Report = () => {
    return (
        <div className = {styles.report}>
            <div className = {styles.report_income_expenditure_part}>
                <div>
                    <div>수입</div>
                    <div className = {styles.report_income}>a</div>
                </div>
                <div>
                    <div>지출</div>
                    <div className = {styles.report_expenditure}>b</div>
                </div>
            </div>
        </div>
    )
}

interface ReportContainerProps {
    option: CalendarType;
}

export default ReportContainer