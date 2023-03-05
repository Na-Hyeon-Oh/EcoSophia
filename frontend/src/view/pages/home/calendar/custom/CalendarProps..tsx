export interface CalendarProps {
    todayDT: Date,
    setTodayDT: (todayDT: Date) => void,
    currentDT: Date,
    setCurrentDT: (currentDT: Date) => void,
    selectedDate: Date,
    setSelectedDate: (selectedDate: Date) => void,
}