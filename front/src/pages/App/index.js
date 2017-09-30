import React from 'react'
import Flex from '_components/Flex'
import Snackbar from 'material-ui/Snackbar'
import { removeMessage } from './actions'
import { verifyUser } from '../Auth/actions'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import FlatButton from 'material-ui/FlatButton'
import { logout } from '../Auth/actions'
import { withCookies } from 'react-cookie'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'

import {
} from './style'

function getCookie(name) {
  if (typeof window !== 'undefined') {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length == 2) return parts.pop().split(';').shift()
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      snackbarOpen: !!nextProps.messages.length
    })
  }

  componentWillMount() {
    const token = getCookie('token')

    if (!this.props.user._id && (!token || !token.length)) {
      this.props.dispatch(push('/auth'))
    } else if (!this.props.user._id) {
      this.props.dispatch(verifyUser())
    }
  }

  handleRequestClose() {
    this.props.dispatch(removeMessage());
    this.setState({
      snackbarOpen: false
    });
  }

  render() {

    const {
      user,
      messages,
      children,
      dispatch,
      cookies,
    } = this.props

    const {
      snackbarOpen,
    } = this.state

    return (
      <Flex full>
        <Flex row justify='space-between' fullWidth style={{height: '50px', borderBottom: '2px solid #eee', position: 'absolute', top: '0'}}>
          <img src='/media/logo.png' style={{height: '70%', marginLeft: '15px'}} alt='logo' />
          {user._id && (
            <Flex row>
              <AccountIcon />
              <p style={{color: '#606060', marginRight: '15px', fontSize: '0.8em', marginLeft: '5px'}}>{user.username}</p>
              <p style={{color: '#d00', cursor: 'pointer', marginLeft: '15px', marginRight: '15px', fontSize: '0.8em'}} onClick={() => dispatch(logout(cookies))}>Logout</p>
            </Flex>
          )}
        </Flex>
        {children}
        {!!messages.length &&
          <Snackbar
            message={messages[0]}
            open={snackbarOpen}
            bodyStyle={{ height: 'auto', lineHeight: '38px', textAlign: 'center' }}
            autoHideDuration={6000}
            onRequestClose={this.handleRequestClose.bind(this)}
          />
        }
      </Flex>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    messages: store.app.messages,
    user: store.user,
  };
}

export default withCookies(connect(mapStateToProps)(App))
