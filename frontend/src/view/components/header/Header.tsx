import React, { useState } from 'react'

import Logo from '../logo/Logo'
import profile_img from '../../../assets/images/profile.png'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { useDispatch } from 'react-redux';
import signOutAction from '../../../redux/actions/signOut';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import styles from './header.module.css'

const Header = ({option}: HeaderProps) => {
    return (
        <div className = {styles.header}>
            <Logo />
            <Navigator option={option}/>
        </div>
    )
}

const Navigator = ({option}: HeaderProps) => {
    const methodAddButtonClickHandler = () => {
        window.location.href = "/user/method"
    }

    const toHomeButtonClickHandler = () => {
        window.location.href = "/home"
    }
    return (
        <div className = {styles.navigator}>
            <div className = {styles.method_add_button_container}>
                {
                    option == 0 
                        ? <Button onClick={methodAddButtonClickHandler}
                                  style={{color: "black", fontSize: "2em"}}>
                            <div>결제수단</div>
                        </Button>
                        : <Button onClick={toHomeButtonClickHandler}
                                style={{color: "black", fontSize: "2em"}}>
                            <div>Home</div>
                        </Button>
                }
            </div>
            <Profile/>
        </div>
    )
}

const Profile = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const [isClicked, setIsClicked] = useState<null | HTMLElement>(null);

    const menuClickedHandler = (event: React.MouseEvent<HTMLElement>) => {
        setIsClicked(event.currentTarget);
    }

    const menuCloseHandler = () => {
        setIsClicked(null);
    }

    const signOutHandler = async () => {
        menuCloseHandler();
        try {
            await dispatch(signOutAction());
        }
        catch(error) {
            console.log(error);
        }
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

interface HeaderProps {
    option: number;
}

export default Header