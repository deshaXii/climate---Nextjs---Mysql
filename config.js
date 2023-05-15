const config = {
  db: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    connectionLimit: 10,
  },
  listPerPage: 3,
};
module.exports = config;
