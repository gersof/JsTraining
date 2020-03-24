
const db = require('../models'); // new require for db object

const createEmployee = async (req, res) => {
    const { firstName, lastName, phone, email } = req.body
  return db.Employee.create({ firstName, lastName, phone, email })
    .then((employee) => res.send(employee))
    .catch((err) => {
      console.log('***There was an error creating a employee', JSON.stringify(contact))
      return res.status(400).send(err)
    })
}

const getAllEmployees = async (req, res) => {    
    db.Employee.findAll()
    .then((employees) => res.send(employees))
    .catch((err) => {
      console.log('There was an error querying employees', JSON.stringify(err))
      return res.send(err)
    });
}

const updateEmployee = async (req, res) => {
    const id = parseInt(req.params.id)
    return db.Employee.findByPk(id)
    .then((employee) => {
        const { firstName, lastName, phone, email } = req.body
      return employee.update({ firstName, lastName, phone, email })
        .then(() => res.send(employee))
        .catch((err) => {
          console.log('***Error updating employee', JSON.stringify(err))
          res.status(400).send(err)
        })
    })
}

const deleteEmployee = async (req, res) => {
    const id = parseInt(req.params.id)
  return db.Employee.findByPk(id)
    .then((employee) => employee.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting employee', JSON.stringify(err))
      res.status(400).send(err)
    })
}

module.exports = {
    createEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
}