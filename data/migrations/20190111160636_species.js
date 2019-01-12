
exports.up = function(knex, Promise) {
    return knex.schema.createTable('species', table => {
        table.increments();
        table.string('name').notNullable().unique();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('species');
};
