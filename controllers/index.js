

const createProduct = async (req, res) => {
    const { firstName, lastName, phone } = req.body
    return res.send(req.body);
}

const getAllProducts = async (req, res) => {
    return res.send([]);
}

const updateProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    console.log('Este es el Id '+ id)
    return res.send(req.body);
}

const deleteProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    console.log('Este es el Id a eliminar '+ id)
    return res.send(req.body);
}

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}