// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/db.sqlite'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/db.sqlite'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/db.sqlite'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
