import React from "react"

import styles from './home.module.css'
import CalendarContainer from './calendar/CalendarContainer'
import CardListContainer from './cardList/CardListContainer'
import ReportContainer from './report/ReportContainer'

const HomeContainer = () => {
    return (
        <div className = {styles.home_container}>
            <CalendarContainer/>
            <div className = {styles.home_inner_container}>
                <CardListContainer/>
                <ReportContainer/>
            </div>
        </div>
    )
}

export default HomeContainer