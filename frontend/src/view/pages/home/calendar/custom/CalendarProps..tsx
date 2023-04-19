import History from '../../../../../model/History';

export interface CalendarProps {
    todayDT: Date,
    setTodayDT: (todayDT: Date) => void,
    currentDT: Date,
    setCurrentDT: (currentDT: Date) => void,
    selectedDate: Date,
    setSelectedDate: (selectedDate: Date) => void,
    onChangeSearchDate: (date: Date) => void,
}