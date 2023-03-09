import { format, isSameDay, isSameMonth, isSameWeek } from 'date-fns';

const DateUtils = (date1: Date, date2: Date) => {
    return {
        isSameDate() {
            //return format(date1, "yyyy-MM-dd eee") === format(date2, "yyyy-MM-dd eee");
            return isSameDay(date1, date2);
        },
        isSameMonth() {
            //return format(date1, 'M') === format(date2, 'M');
            return isSameMonth(date1, date2);
        },
        isSameWeek() {
            return isSameWeek(date1, date2);
        }
    };
}

export default DateUtils;


