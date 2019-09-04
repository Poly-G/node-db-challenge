exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "sleep",
          description: "actually get 8 hours of sleep in a single night",
          completed: false
        }
      ]);
    });
};
