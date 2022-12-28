// const env = process.env.NODE_ENV;
const env = 'dev';

let MYSQL_CONF;
let REDIS_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: '3306',
    database: 'myblog'
  };
  REDIS_CONF = {
    port: 6379,
    host: 'localhost'
  };
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: '3306',
    database: 'myblog'
  };
  REDIS_CONF = {
    port: 6379,
    host: 'localhost'
  };
}

module.exports = {
  MYSQL_CONF
};
