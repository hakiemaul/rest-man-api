'use strict';
const models = require('../models');
const fs = require('fs')

let readFile = fs.readFileSync('dummy-data/employeeDummy.json').toString()
let employeeJson = JSON.parse(readFile)
module.exports = {
  up: function (queryInterface, Sequelize) {
    // return models.Employee.find({})
    // .then((employees) => {
    //   if (employees == null) {
    //       return [queryInterface.bulkInsert('Employee', employeeJson, {})]
    //   }else {
    //     queryInterface.bulkDelete('Employee', null, {});
    //       return [queryInterface.bulkInsert('Employee', employeeJson, {})]
    //   }
    // })
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
