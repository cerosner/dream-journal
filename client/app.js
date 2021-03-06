import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar } from './components'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div id="appdiv">
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
