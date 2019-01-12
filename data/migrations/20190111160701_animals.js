
exports.up = function(knex, Promise) {
    return knex.schema.createTable('animals', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('zoo_id').unsigned();
        table.foreign('zoo_id').references('id').on('zoos');
        table.integer('species_id').unsigned();
        table.foreign('species_id').references('id').on('species');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('animals');
};
