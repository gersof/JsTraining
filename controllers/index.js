
const db = require('../models'); // new require for db object

const createProduct = async (req, res) => {
    const { description, price } = req.body
  return db.Product.create({ description, price })
    .then((product) => res.send(product))
    .catch((err) => {
      console.log('***There was an error creating a product', JSON.stringify(contact))
      return res.status(400).send(err)
    })
}

const getAllProducts = async (req, res) => {    
    db.Product.findAll()
    .then((products) => res.send(products))
    .catch((err) => {
      console.log('There was an error querying products', JSON.stringify(err))
      return res.send(err)
    });
}

const updateProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    return db.Product.findByPk(id)
    .then((product) => {
        const { description, price } = req.body
      return product.update({ description, price })
        .then(() => res.send(product))
        .catch((err) => {
          console.log('***Error updating product', JSON.stringify(err))
          res.status(400).send(err)
        })
    })
}

const deleteProduct = async (req, res) => {
    const id = parseInt(req.params.id)
  return db.Product.findByPk(id)
    .then((product) => product.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting product', JSON.stringify(err))
      res.status(400).send(err)
    })
}

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}