export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/databe.db",
  },
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreing_keys = ON");
      done();
    },
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations",
  },
  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds",
  },
};
