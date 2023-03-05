import { useState } from "react";
import DatePicker from "react-widgets/DatePicker";

import 'react-widgets/styles.css';

const ReactDatePicker = ({ key, date, onChange }: ReactDatePickerProps) => {
    return (
        <DatePicker
            key={key}
            defaultValue={date}
            valueFormat={{ dateStyle: "medium" }}
            onChange={onChange}
        />
    );
}

interface ReactDatePickerProps {
    key: number;
    date: Date | null | undefined;
    onChange: (date: Date | null | undefined) => void;
}

export default ReactDatePicker;