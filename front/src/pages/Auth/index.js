import React from 'react'
import Flex from '_components/Flex'
import {Tabs, Tab} from 'material-ui/Tabs'
import {connect} from 'react-redux'
import { withCookies } from 'react-cookie'
import Login from './components/Login'
import Signin from './components/Signin'

import {

} from './style'

import {
  login,
  signin,
} from './actions'

class Auth extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
    }
  }

  componentWillMount() {
    if (this.props.user._id) {
      this.props.dispatch('/')
    }
  }

  render() {

    const {
      isLogin
    } = this.state

    return (
      <Flex full>
        {isLogin ? (
          <Login switchToRegister={() => this.setState({ isLogin: false })} onSubmit={(payload) => this.props.dispatch(login(payload, this.props.cookies))}/>
        ) : (
          <Signin switchToLogin={() => this.setState({ isLogin: true })} onSubmit={(payload) => { this.props.dispatch(signin(payload)); this.setState({ isLogin: true }) }}/>
        )}
      </Flex>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default withCookies(connect(mapStateToProps)(Auth))
