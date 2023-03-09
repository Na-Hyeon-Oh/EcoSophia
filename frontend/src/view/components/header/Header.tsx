import React, { useState } from 'react'

import Logo from '../logo/Logo'
import profile_img from '../../../assets/images/profile.png'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className = {styles.header}>
            <Logo />
            <Navigator/>
        </div>
    )
}

const Navigator = () => {
    const methodAddButtonClickHandler = () => {
        window.location.href = "/user/method"
    }
    return (
        <div className = {styles.navigator}>
            <div className = {styles.method_add_button_container}>
                <Button onClick={methodAddButtonClickHandler}
                        style={{color: "black", fontSize: "2em"}}>
                    <div>결제수단</div> +
                </Button>
            </div>
            <Profile/>
        </div>
    )
}

const Profile = () => {
    const [isClicked, setIsClicked] = useState<null | HTMLElement>(null);

    const menuClickedHandler = (event: React.MouseEvent<HTMLElement>) => {
        setIsClicked(event.currentTarget);
    }

    const menuCloseHandler = () => {
        setIsClicked(null);
    }

    const signOutHandler = () => {
        menuCloseHandler();
        window.location.href = "/sign-in";
    }

    return (
        <div className = {styles.profile_container}>
            <img src = {profile_img} className = {styles.profile} onClick={menuClickedHandler}/>
            <Menu
                id="menu-appbar"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(isClicked)}
                onClose={menuCloseHandler}
            >
                <MenuItem onClick={signOutHandler}>Sign Out</MenuItem>
                <MenuItem onClick={()=> {}}>My Account</MenuItem>
            </Menu>
        </div>
    )
}

export default Header