import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../../redux/store';
import { fetchHistory } from '../../../redux/actions/history';
import { fetchMethod } from '../../../redux/actions/method';

import OptionContainer from './option/OptionContainer';
import { Method } from '../../../model/Method';
import { MethodType } from '../../../assets/enums/MethodType';
import { CalendarType } from '../../../assets/enums/CalendarType';
import CalendarContainer from './calendar/CalendarContainer';
import AddHistoryContainer from './addHistory/AddHistoryContainer';
import ReportContainer from './report/ReportContainer';

import styles from './home.module.css';

const HomeContainer = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const userId = useSelector((state: RootState) => state.auth.userId);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            dispatch(fetchHistory(userId)).then(() =>
                dispatch(fetchMethod(userId)).then(() => setLoading(false))
            );
        }
    }, [dispatch, userId]);

    const methodList = useSelector((state: RootState) => state.method.data);
    const [filter, setFilter] = useState<Array<Method>>(methodList);
    const [calendarOption, setCalendarOption] = useState(CalendarType.MONTHLY);
    const [searchDate, setSearchDate] = useState(new Date());

    const onClickCalendarOption = (option : CalendarType) : void => {
        setCalendarOption(option);
    };

    const onChangeSearchDate = (date: Date) => {
        setSearchDate(date);
    }

    if (loading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div className={styles.home_container}>
                <div className={styles.home_left_container}>
                    <OptionContainer methodList={methodList} filter={filter} onChangeFilter={setFilter}
                                     calendarOption={calendarOption} onClickCalendarOption={onClickCalendarOption}/>
                    <CalendarContainer option={calendarOption} onChangeSearchDate={onChangeSearchDate}/>
                </div>
                <div className={styles.home_right_container}>
                    <ReportContainer calendarOption={calendarOption} searchDate={searchDate}/>
                    <AddHistoryContainer/>
                </div>
            </div>
        )
    }
}

export default HomeContainer;