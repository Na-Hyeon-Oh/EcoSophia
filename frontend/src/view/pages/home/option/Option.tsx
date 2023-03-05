import { CalendarType } from '../../../../assets/enums/CalendarType';

import styles from './option.module.css';

const Option = ({ selectedOption, onClick } : OptionProps) => {
    return (
        <div className = {styles.option_container}>
            <li className = {styles.option + ` ${selectedOption === CalendarType.MONTHLY ? styles.selected : ''}`}
                key = {CalendarType.MONTHLY}
                onClick = {() => onClick(CalendarType.MONTHLY)}> Monthly </li>
            <li className = {styles.option + ` ${selectedOption === CalendarType.WEEKLY ? styles.selected : ''}`}
                key = {CalendarType.WEEKLY}
                onClick = {() => onClick(CalendarType.WEEKLY)}> Weekly </li>
            <li className = {styles.option + ` ${selectedOption === CalendarType.DAILY ? styles.selected : ''}`}
                key = {CalendarType.DAILY}
                onClick = {() => onClick(CalendarType.DAILY)}> Daily </li>
        </div>
    )
}

interface OptionProps {
    selectedOption: any;
    onClick: (option: CalendarType) => void;
}

export default Option;