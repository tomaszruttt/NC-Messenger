const testUsers = require("../data/test-data/test-data");
console.log(testUsers);

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return knex("users").insert(testUsers).returning("*");
    });
};
