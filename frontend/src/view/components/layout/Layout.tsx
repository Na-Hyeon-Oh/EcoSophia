import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = (props: {
    option: number,
    children: React.ReactNode
}) => {
    return (
        <div className = "layout">
            <Header option={props.option}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout