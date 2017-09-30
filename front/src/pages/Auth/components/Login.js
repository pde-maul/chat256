import React from 'react'
import {connect} from 'react-redux'
import Flex from '_components/Flex'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'

import {

} from '../style'

class Login extends React.Component {

  render() {

    const {
      loading
    } = this.props

    return (
      <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'stretch'}} onSubmit={this.props.handleSubmit}>
        <p style={{fontFamily: 'Roboto', color: '#606060', margin: 5, fontWeight: 600}}>{'Login'}</p>
        <p style={{fontFamily: 'Roboto', color: '#606060', fontSize: '0.8em', margin: 5}}>{'Welcome back!'}</p>
        <Field name='username' component={TextField} floatingLabelText='Username'/>
        <Field name='password' component={TextField} type='password' floatingLabelText='Password'/>
        {loading ? (
          <Flex>
            <CircularProgress style={{marginTop: '30px'}} />
          </Flex>
        ) : (
          <RaisedButton type='submit' label='Log in' primary style={{marginTop: '30px'}}/>
        )}
        <p style={{fontFamily: 'Roboto', color: '#606060', fontSize: '0.8em', margin: 15}}>{'Dont have an account? create one '}<span onClick={this.props.switchToRegister} style={{cursor: 'pointer', color: '#0cc'}}>Here</span></p>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  return errors
}

Login = reduxForm({
  form: 'login',
  validate,
  touchOnBlur: false
})(Login)

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
  }
}

export default connect(mapStateToProps)(Login)
