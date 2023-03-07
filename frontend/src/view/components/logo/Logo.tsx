import React from 'react';

import styles from './logo.module.css'

const Logo = ({}) => {
    return (
        <a href={window.location.pathname}>
            <div className = {styles.logo}> EcoSophia </div>
        </a>
    )
}

export default Logo