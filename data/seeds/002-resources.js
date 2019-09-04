exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "A Bed",
          description: "A warm cozy bed made just for me"
        }
      ]);
    });
};
