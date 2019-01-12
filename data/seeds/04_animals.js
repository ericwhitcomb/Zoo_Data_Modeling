
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { name: "Snuffles", species_id: 1, zoo_id: 1 },
        { name: "Cornelius", species_id: 2, zoo_id: 1 },
        { name: "Athena", species_id: 3, zoo_id: 1 },
        { name: "Ares", species_id: 3, zoo_id: 1 },
        { name: "Snelby", species_id: 4, zoo_id: 1 },
        { name: "Gwendolyn", species_id: 5, zoo_id: 2 },
        { name: "Archebald", species_id: 6, zoo_id: 2 },
        { name: "Polonius", species_id: 1, zoo_id: 2 },
        { name: "Augusta", species_id: 4, zoo_id: 2 },
        { name: "Stephen", species_id: 7, zoo_id: 2},
        { name: "Rocky", species_id: 8, zoo_id: 2 }
      ]);
    });
};
