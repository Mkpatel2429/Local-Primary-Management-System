import React, { Component } from 'react'
import loading from './Images/Spinner.gif'

export class Loadingbar extends Component {
  render() {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(0%,100%)" }
    return (
        <div style={style}>
            <img src={loading} alt='loading'></img>
        </div>
    )
  }
}

export default Loadingbar