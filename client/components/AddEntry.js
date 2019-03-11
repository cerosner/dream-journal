import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../store/entries';

const initialState = {
  content: ''
}

export class AddEntry extends Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addNewEntry(this.state);
    this.setState(initialState);
  }

  render() {
    const { content } = this.state

    return (
      <div id="addentrydiv">
        <h1>Dream Journal</h1>
        <form onSubmit={this.handleSubmit}>
        <textarea rows="15" cols="30" name="content" value={content} placeholder="i dreamt..." onChange={this.handleChange} />
          <br />
          <input type="submit" name="Submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewEntry: entry => dispatch(addEntry(entry))
});

export default connect(null, mapDispatchToProps)(AddEntry)
