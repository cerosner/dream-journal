import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getEntries } from '../store/entries'

class AllEntries extends Component {
  render() {
    return (
      <div id="allentrydiv">
        <h1>Entries</h1>
        {this.props.allEntries.map((entry) => (
        <div key={entry.id} id="entrydiv">
          <div className="subdata">
            <strong>Date:</strong> {entry.createdAt}
          </div>
          <div className="entrycontent">
          {entry.content}
          </div>
          <div className="subdata" id="keywords">
            <strong>Keywords:</strong> {entry.keywords.words}
          </div>
        </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allEntries: state.entryReducer.allEntries
})

const mapDispatchToProps = dispatch => ({
  fetchEntries: dispatch(getEntries())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllEntries))
