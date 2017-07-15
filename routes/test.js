var express = require('express');
var router = express.Router();

let models = require('../models')

/* GET home page. */

router.get('/database', function(req, res, next) {
  models.Role.findAll()
  .then((response) => {
    let status = 'not connected'
    if (response.length >= 0) {
        status = 'connected'
    }
    res.status(200)
    res.json({
        database: status
    })
  }).catch((err) => {
    res.status(500)
    res.json(err)
  })
});

/**
 * @api {get} /ping Ping server
 * @apiGroup Status
 * @apiSuccess {String} status Status Server
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "status": "up",
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/', function(req, res, next){
  res.status(200)
  res.json({
    status: "running"
  })
})

module.exports = router;
