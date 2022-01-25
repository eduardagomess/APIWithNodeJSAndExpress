const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

const app = () => {
  //start a new Express application
  const app = express()

  // use port in config file unless there exists a pre-configured port
  app.set('port', process.env.PORT || config.get('server.port'))

  //allows express to read the body and then parse that into a Json object that we can understand.
  app.use(bodyParser.json())

  const route = require('../api/routes/customerWallets')

  route(app)

  return app
}

module.exports = app
