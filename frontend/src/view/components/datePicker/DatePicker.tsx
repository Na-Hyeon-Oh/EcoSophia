import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const ReactDatePicker = ({ date, onChange }: ReactDatePickerProps) => {
    const handleChange = (date: Date) => {
        onChange(date);
    };

    return (
        <DatePicker
            selected={date}
            onChange={handleChange}
        />
    );
}

interface ReactDatePickerProps {
    date: Date;
    onChange: (date: Date) => void;
}

export default ReactDatePicker