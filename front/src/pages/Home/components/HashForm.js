import React from "react"
import {connect} from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Flex from '_components/Flex'

const renderSelectField = ({ input }) => (
  <SelectField
    floatingLabelText={'Algorithm'}
    style={{ textAlign: 'left' }}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
  >
    <MenuItem value={'md5'} primaryText='md5' />
    <MenuItem value={'sha1'} primaryText='sha1' />
    <MenuItem value={'sha256'} primaryText='sha256' />
  </SelectField>
)

class HashForm extends React.Component {

  render() {

    const {
      loading,
      username,
      hash,
    } = this.props

    return (
      <Flex>
        <p style={{fontFamily: 'Roboto', color: '#606060', margin: 5, fontWeight: 600}}>{`Hi ${this.props.username}, ready to hash?`}</p>
        {hash ? (
          <p style={{fontFamily: 'Roboto', color: '#606060', fontSize: '0.8em', margin: 5}}>{hash}</p>
        ) : (
          <p style={{fontFamily: 'Roboto', color: '#606060', fontSize: '0.8em', margin: 5}}>{`Hash will be display here`}</p>
        )}
        <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch', alignItems: 'stretch'}} onSubmit={this.props.handleSubmit}>
          <Field name='data' component={TextField} floatingLabelText='Text to hash'/>
          <Field name='algorithm' component={renderSelectField} />
          <Field name='iterations' component={TextField} type='number' floatingLabelText='Iterations' value={1} min={1} max={1000000} />
          {loading ? (
            <Flex>
              <CircularProgress size={35} style={{marginTop: '30px'}} />
            </Flex>
          ) : (
            <RaisedButton type='submit' label='Hash' primary style={{marginTop: '30px'}}/>
          )}
        </form>
      </Flex>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.data || !values.data.length) {
    errors.data = 'Required'
  }

  return errors
}

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    username: state.user.username,
    hash: state.data.hash,
  }
}

HashForm = reduxForm({
  form: 'hash',
  validate,
  touchOnBlur: false
})(HashForm)

export default connect(mapStateToProps)(HashForm)
