import React, { Component } from 'react'
import "../style/Footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <p>Made by <a href="https://umair.codes" rel="noopener noreferer" target="_blank">Umair Ayub</a></p>
                <p>Built with React, Hosted on Netlify </p>
            </div>
        )
    }
}
