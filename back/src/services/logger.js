const logger = {}

/* eslint-disable no-console */
logger.error = (message) => {
  console.log('\x1b[31m', `${message}`, '\x1b[0m')
}

logger.success = (message) => {
  console.log('\x1b[32m', `${message}`, '\x1b[0m')
}

logger.warning = (message) => {
  console.log('\x1b[33m', `${message}`, '\x1b[0m')
}

logger.info = (message) => {
  console.log('\x1b[36m', `${message}`, '\x1b[0m')
}
/* eslint-esable no-console */

module.exports = logger
