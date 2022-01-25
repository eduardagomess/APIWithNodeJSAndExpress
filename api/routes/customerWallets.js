const route = app => {
  const controller = require('../controllers/customerWallets')()

  // app.route() function returns an instance of a single route, which you can then use to handle HTTP verbs
  app.route('/api/v1/customerWallets').get(controller.listCustomerWallets)
}
module.exports = route
