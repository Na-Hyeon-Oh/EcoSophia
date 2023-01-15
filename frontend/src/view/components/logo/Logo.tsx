import React from 'react';

import styles from './logo.module.css'

const Logo = () => {
    return (
        <a href="/home">
            <div className = {styles.logo}> EcoSophia </div>
        </a>
    )
}

export default Logo