module.exports = (router) => {
  require('./Auth.routes.js')(router)
  require('./User.routes.js')(router)
  require('./Hash.routes.js')(router)
}
