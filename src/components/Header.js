import React, { Component } from 'react'
import "../style/Header.css"
export default class Header extends Component {
    render() {
        return (
            <div className="heading">
                <h1>Github Stars</h1>
                <p>Open Source Stars</p>
            </div>
        )
    }
}
