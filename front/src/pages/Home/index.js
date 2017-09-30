import React from "react"
import {connect} from 'react-redux'
import { calculateHash } from './actions'
import HashForm from './components/HashForm'

import {

} from './style'

class Home extends React.Component {

  render() {

    return (
      <HashForm onSubmit={(payload) => this.props.dispatch(calculateHash(payload))} />
    )
  }
}

export default connect()(Home)
