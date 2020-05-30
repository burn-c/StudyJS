// Update with your config settings.

module.exports = {


  client: 'postgres',
  connection: {
    host: 'localhost',
    database: 'graphql',
    user : 'postgres',
    password : 'docker',

    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }


};
