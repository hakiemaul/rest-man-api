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
    "username": "root",
    "password": null,
    "database": "db_RESTMan_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
