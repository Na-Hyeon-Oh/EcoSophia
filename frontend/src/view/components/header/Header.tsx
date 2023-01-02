import React from 'react';

import Logo from '../logo/Logo'
import profile_img from '../../../assets/images/profile.png'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className = {styles.header}>
            <Logo/>
            <Navigator/>
        </div>
    )
}

const Navigator = () => {
    return (
        <div className = {styles.navigator}>
            <CardMenu/>
            <Profile/>
        </div>
    )
}

const CardMenu = () => {
    return (
        <div className = {styles.card_menu}>
            <div className = {styles.card_management}>
                Card 관리
            </div>
            <div className = {styles.card_add}>
                +
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className = {styles.profile_container}>
            <img src = {profile_img} className = {styles.profile} />
        </div>
    )
}

export default Header