import React from 'react'
import PropTypes from 'prop-types'

import {

} from './style'

class Flex extends React.Component {

  render() {

    const {
      style,
      column,
      row,
      justify,
      align,
      noShrink,
      flex,
      children,
      full,
      fullWidth,
      fullHeight,
      ...rest,
    } = this.props

    const newStyle = {}
    Object.assign(newStyle, {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      justifyContent: justify,
      alignItems: align,
      flexShrink: noShrink ? 0 : style.flexShrink,
      flex: flex ? 1 : style.flex,
      height: (fullHeight || full) ? '100%' : style.height,
      width: (fullWidth || full) ? '100%' : style.width,
    }, style)

    return (
      <div
        style={newStyle}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

Flex.propTypes = {
  column: PropTypes.bool,
  row: PropTypes.bool,
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'stretch']),
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  noShrink: PropTypes.bool,
  flex: PropTypes.bool,
  full: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
}

Flex.defaultProps = {
  style: {},
  column: false,
  row: false,
  justify: 'center',
  align: 'center',
  noShrink: false,
  flex: false,
  full: false,
  fullWidth: false,
  fullHeight: false,
};

export default Flex
