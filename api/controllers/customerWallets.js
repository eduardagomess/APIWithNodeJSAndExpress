const controller = () => {
  // data
  const customerWalletDB = require('../data/customerWallets.json')

  // controller object
  const controller = {}

  function listCustomerWallets(req, res) {
    res.status(200).json(customerWalletDB)
  }

  // assign listCustomerWallets function to controller object
  controller.listCustomerWallets = listCustomerWallets

  return controller
}

module.exports = controller
