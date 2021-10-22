exports.up = function(knex) {
  // CREAR TABLA
  return knex.schema.createTable('users', function(table) {
    table
      .increments('user_id')
      .notNullable()
      .unique()
      .primary();
    table
      .string('email', 50)
      .notNullable()
      .unique();
    table.string('password', 20).notNullable();
  });
};

exports.down = function(knex) {
  // ELMINAR TABLA
  return knex.schema.dropTableIfExists('users');
};
