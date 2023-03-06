import React from "react";

import Logo from "../logo/Logo";

import styles from '../cardLayout/cardLayout.module.css';

const CardLayout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div className = {styles.card_layout}>
            <Logo/>
            <div className = {styles.card_container}>
                {props.children}
            </div>
        </div>
    );
}

export default CardLayout;