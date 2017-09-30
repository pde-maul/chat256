import Logger from './logger.js'
import Security from './Security.js'

/* action [rendered, updated, deleted, created] */
const render = (action, ressource, json) => {

  const message = `${ressource.charAt(0).toUpperCase() + ressource.slice(1)} successfully ${action}ed`
  const status = 200
  Logger.success(message)
  return ({ message, status, [ressource]: json})
}

const renderWithToken = (action, ressource, json) => {

  const token = Security.encode(json)
  const message = `${ressource.charAt(0).toUpperCase() + ressource.slice(1)} successfully ${action}ed`
  const status = 200
  Logger.success(message)
  return ({ message, status, [ressource]: json, token})
}

module.exports = {
  renderWithToken,
  render,
}
