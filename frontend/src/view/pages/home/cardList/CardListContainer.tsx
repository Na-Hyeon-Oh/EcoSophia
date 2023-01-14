import React from "react"

import styles from './cardlist.module.css'

const CardListContainer = () => {
    return (
        <div className = {styles.cardlist_container}>
            <Title/>
            <CardList/>
        </div>
    )
}

const Title = () => {
    return (
        <div className = {styles.cardlist_title_container}>
            Card List
        </div>
    )
}

const CardList = () => {
    return (
        <div className = {styles.cardlist}>

        </div>
    )
}

export default CardListContainer