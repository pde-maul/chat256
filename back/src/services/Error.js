import Logger from './logger.js'

const notFound = (ressource) => {
  const message = `${ressource} not found`
  const status = 404
  Logger.error(message)
  return ({ message, status })
}

const forbidden = () => {
  const message = 'Unauthorized access'
  const status = 401
  Logger.error(message)
  return ({ message, status })
}

/* action [getting, updating, deleting, creating] */
const crash = (action, ressource, err) => {
  const message = `Error while ${action}ing ${ressource}`
  const status = 500
  Logger.error(message)
  Logger.error(err)
  return ({ message, status })
}

/* status [missing, invalid] */
const parameter = (state, param) => {
  const message = `${state} parameter: ${param}`
  const status = 400
  Logger.error(message)
  return ({ message, status })
}

module.exports = {
  parameter,
  crash,
  forbidden,
  notFound,
}
