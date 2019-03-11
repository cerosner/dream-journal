import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div id="navdiv">
        <nav>
          <Link to="/entries">Past Entries</Link>
          <Link to="/">Add Entry</Link>
        </nav>
      </div>
    )
  }
}
