
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('species').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        { name: "Star-nosed Mole" }, 
        { name: "Platypus" }, 
        { name: "Chameleon" }, 
        { name: "Snail" },
        { name: "Blue-footed Booby" }, 
        { name: "Anteater" }, 
        { name: "Minotaur" }, 
        { name: "Raccoon" }
      ]);
    });
};
