
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('addresses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        { address: "2920 Zoo Dr, San Diego, CA 92101", zoo_id: 1 },
        { address: "Government Dr, St. Louis, MO 63110", zoo_id: 2 }
      ]);
    });
};
