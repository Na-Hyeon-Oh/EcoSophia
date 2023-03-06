import { format } from 'date-fns';

const DateUtils = (date1: Date, date2: Date) => {
    return {
        isSameDate() {
            return format(date1, "yyyy-MM-dd eee") === format(date2, "yyyy-MM-dd eee");
        }
    };
}

export default DateUtils;


