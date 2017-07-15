module.exports = {
  "development": {
    "username": "postgres",
    "password": 12345,
    "database": "db_RESTMan_dev",
    "host": "localhost",
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
    "username": "restman",
    "password": "restman1",
    "database": "restman",
    "host": "restman.crllgb8fv86z.ap-southeast-1.rds.amazonaws.com",
    "dialect": "postgres"
  }
}
