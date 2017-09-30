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

class Signin extends React.Component {

  render() {

    const {
      loading
    } = this.props

    return (
      <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'stretch'}} onSubmit={this.props.handleSubmit}>
        <p style={{fontFamily: 'Roboto', color: '#606060', margin: 5, fontWeight: 600}}>{'Register'}</p>
        <p style={{fontFamily: 'Roboto', color: '#606060', fontSize: '0.8em', margin: 5}}>{'Use the form below to create an account.'}</p>
        <Field name='username' component={TextField} floatingLabelText='Username'/>
        <Field name='password' component={TextField} type='password' floatingLabelText='Password'/>
        <Field name='repeatPassword' component={TextField} type='password' floatingLabelText='Repeat your password'/>
        {loading ? (
          <Flex>
            <CircularProgress style={{marginTop: '30px'}} />
          </Flex>
        ) : (
          <RaisedButton type='submit' label='Register' primary style={{marginTop: '30px'}}/>
        )}
        <p style={{fontFamily: 'Roboto', color: '#606060', fontSize: '0.8em', margin: 15}}>{'Already have an account? Login '}<span onClick={this.props.switchToLogin} style={{cursor: 'pointer', color: '#0cc'}}>Here</span></p>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }

  if (values.password != values.repeatPassword) {
    errors.repeatPassword = 'Passwords must be same'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required'
  }

  return errors
}

Signin = reduxForm({
  form: 'signin',
  validate,
  touchOnBlur: false
})(Signin)

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
  }
}

export default connect(mapStateToProps)(Signin)
