import React from "react"

import ReactCalendar from "../../../components/calendar/ReactCalendar"

import styles from './addhistory.module.css'

const AddHistoryContainer = () => {
    return (
        <div className = {styles.addhistory_container}>
            <Title/>
            <AddHistoryForm/>
        </div>
    )
}

const Title = () => {
    return (
        <div className = {styles.addhistory_title_container}>
            내역 추가
        </div>
    )
}

const AddHistoryForm = () => {
    return (
        <div className = {styles.addhistory}>
            <span>
                <div>날짜</div>
                <ReactCalendar></ReactCalendar>
            </span>
            <span>
                <div>내용</div>
                <div>

                </div>
            </span>
            <span>
                <div>금액</div>
                <div>

                </div>
                <div></div>
            </span>
            <span>
                <div>분류</div>
                <div></div>
            </span>
            <div>

            </div>
        </div>
    )
}

export default AddHistoryContainer