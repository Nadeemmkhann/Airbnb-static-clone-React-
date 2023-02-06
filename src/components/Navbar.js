import React from "react"
import logo from "../staticImages/airbnb-logo.png"

export default function Navbar() {
    return (
        <div className="navbar" >
            <img src = {logo} width="80px" className="airbnb-logo"/>
        </div>
    )
}