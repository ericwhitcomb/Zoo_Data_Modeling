
exports.up = function(knex, Promise) {
    return knex.schema.createTable('addresses', table => {
        table.increments();
        table.string('address').notNullable();
        table.integer('zoo_id').unsigned().unique();
        table.foreign('zoo_id').references('id').on('zoos');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('addresses');
};
