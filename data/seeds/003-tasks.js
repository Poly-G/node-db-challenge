exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "get in the bed",
          notes: "the blanket is heated",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
