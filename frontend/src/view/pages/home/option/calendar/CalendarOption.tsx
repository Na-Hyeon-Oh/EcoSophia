import { CalendarType } from '../../../../../assets/enums/CalendarType';

import styles from './calendarOption.module.css';

const CalendarOption = ({ selectedOption, onClick } : CalendarOptionProps) => {
    return (
        <div className = {styles.calendar_option_container}>
            <li className = {styles.calendar_option + ` ${selectedOption === CalendarType.MONTHLY ? styles.selected : ''}`}
                key = {CalendarType.MONTHLY}
                onClick = {() => onClick(CalendarType.MONTHLY)}> Monthly </li>
            <li className = {styles.calendar_option + ` ${selectedOption === CalendarType.WEEKLY ? styles.selected : ''}`}
                key = {CalendarType.WEEKLY}
                onClick = {() => onClick(CalendarType.WEEKLY)}> Weekly </li>
            <li className = {styles.calendar_option + ` ${selectedOption === CalendarType.DAILY ? styles.selected : ''}`}
                key = {CalendarType.DAILY}
                onClick = {() => onClick(CalendarType.DAILY)}> Daily </li>
        </div>
    )
}

interface CalendarOptionProps {
    selectedOption: any;
    onClick: (option: CalendarType) => void;
}

export default CalendarOption;