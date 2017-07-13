'use strict';
const models = require('../models');
const fs = require('fs')

let readFile = fs.readFileSync('dummy-data/employeeDummy.json').toString()
let employeeJson = JSON.parse(readFile)
module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Employee.find({})
    .then((employees) => {
      if (employees == null) {
        employeeJson.map((data)=>{
          return queryInterface.bulkInsert('Employee', [data], {})
        })
      }else {
        queryInterface.bulkDelete('Employee', null, {});
        employeeJson.map((data)=>{
          return queryInterface.bulkInsert('Employee', [data], {})
        })
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
