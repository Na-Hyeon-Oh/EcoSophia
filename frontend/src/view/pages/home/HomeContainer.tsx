import React from "react"

import styles from './home.module.css'
import CalendarContainer from './calendar/CalendarContainer'
import CardListContainer from './card_list/CardListContainer'
import ReportContainer from './report/ReportContainer'

const HomeContainer = () => {
    return (
        <div className = {styles.home_container}>
            <CalendarContainer/>
            <div>
                <CardListContainer/>
                <ReportContainer/>
            </div>
        </div>
    )
}

export default HomeContainer