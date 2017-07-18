require('dotenv').config
module.exports = {
  "development": {
    // "username": "restman",
    // "password": "restman1",
    // "database": "restman",
    // "host": "restman.crllgb8fv86z.ap-southeast-1.rds.amazonaws.com",
    // "dialect": "postgres"

    // "username": "postgres",
    // "password": 12345,
    // "database": "db_RESTMan_dev",
    // "host": "localhost",
    // "dialect": "postgres"

    "username": "restman",
    "password": "restman12345",
    "database": "restman",
    "host": "restman.cvr4qojho2lg.ap-southeast-1.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": 12345,
    "database": "db_test_RESTMan",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB_RESTMAN,
    "host": process.env.HOST_SERVER,
    "dialect": "postgres"
  },
  "postgresql": {
    "strategy": 'truncation',
    "skipTables": []
  }
}
