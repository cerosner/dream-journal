import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../store/entries';

const initialState = {
  content: '',
  keywords: []
}

export class AddEntry extends Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleEntryChange = this.handleEntryChange.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this)
    this.addingKeywords = this.addingKeywords.bind(this)
  }

  handleEntryChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  handleKeywordChange(event) {
    this.setState({
      keywords: event.target.value
    })
  }

  addingKeywords(event) {
    event.preventDefault()
    
    this.setState({
      keywords: [...initialState.keywords, event.target.value]
    })
  }

  handleEntrySubmit(event) {
    event.preventDefault()

    this.props.addNewEntry(this.state.content)
    this.props.addNewKeyword(this.state.keywords)

    this.setState(initialState);
  }

  render() {
    const { content, keywords } = this.state

    return (
      <div>
        <h1>Dream Journal</h1>
        <div id="addentrydiv">
          <textarea rows="15" cols="30" name="content" value={content} placeholder="i dreamt..." onChange={this.handleEntryChange} />
        </div>

          <div id="listkeywords">
          Keywords: {keywords}
          </div>
          <input name="keywords" placeholder="type a keyword to attach to entry" id="keywordinput" /> <button type="submit">Add Keyword</button>

          <br />
        <div id="submitentry">
          <button type="submit" onClick={() => this.handleEntrySubmit}>Add Entry</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewEntry: entry => dispatch(addEntry(entry))
});

export default connect(null, mapDispatchToProps)(AddEntry)
