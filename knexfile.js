const path = require('path');

const BASE_PATH = path.resolve(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://afu:@localhost:5432/koa_api_test',
    migrations: {
      directory: path.resolve(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.resolve(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://afu:@localhost:5432/koa_api',
    migrations: {
      directory: path.resolve(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.resolve(BASE_PATH, 'seeds')
    }
  }
};
