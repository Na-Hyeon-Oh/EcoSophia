import React from 'react';

import profile_img from '../../../assets/images/profile.png'

const Header = () => {
    return (
        <div className = "header">
            <Logo/>
            <CardMenu/>
            <Profile/>
        </div>
    )
}

const Logo = () => {
    return (
        <div className = "logo">
            ECOSOPHIA
        </div>
    )
}

const CardMenu = () => {
    return (
        <div className = "card-menu">
            <div className = "card-menu-management">
                카드 관리
            </div>
            <div className = "card-menu-add">
                +
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className = "profile">
            <img src = {profile_img} />
        </div>
    )
}

export default Header