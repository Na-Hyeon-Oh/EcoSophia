import React from "react"

import styles from './report.module.css'

const ReportContainer = () => {
    return (
        <div className = {styles.report_container}>
            <Title/>
            <Report/>
        </div>
    )
}

const Title = () => {
    return (
        <div className = {styles.report_title_container}>
            Report
        </div>
    )
}

const Report = () => {
    return (
        <div className = {styles.report}>

        </div>
    )
}

export default ReportContainer