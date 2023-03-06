import React from "react"

import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div className = "layout">
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout