const ENV = process.env.NODE_ENV || "development";
const { DB_URL } = process.env;

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

const customConfigs = {
  production: {
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  development: {
    connection: {
      database: "goose_messenger",
    },
  },
  test: {
    connection: {
      database: "goose_messenger_test",
    },
  },
};

module.exports = { ...customConfigs[ENV], ...baseConfig };
