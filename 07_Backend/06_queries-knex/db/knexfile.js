// Update with your config settings.

module.exports = {
  // DEVELOPMENT: Modo de desarrollo, contiene datos de prueba y permite hacer todo tipo de experimentos
  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'qwe123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // STAGING: Modo de montaje contiene los datos más parecidos o casi idénticos al modo producción
  staging: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'qwe123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // PRODUCTION: Modo en producción o en línea, contiene los datos reales de tu negocio
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'qwe123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
