let config = {}

config.host = 'http://localhost'
config.port = 5000
config.url = config.host + ':' + config.port

config.database = {}
config.database.hostname = 'localhost'
config.database.name = 'chat256'
config.database.ssl = 'false'
config.database.port = '27017'

config.front = {}
config.front.hostname = 'http://localhost'
config.front.port = 8080
config.front.url = config.front.hostname + ':' + config.front.port

config.secret = 'chatonvoyageur666'

module.exports = config
