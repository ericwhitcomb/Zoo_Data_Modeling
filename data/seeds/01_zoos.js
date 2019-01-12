
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoos').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('zoos').insert([
        { name: 'San Diego Zoo'},
        { name: 'St. Louis Zoo'}
      ]);
    });
};
