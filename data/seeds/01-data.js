/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("project_resources").truncate();
  await knex("tasks").truncate();
  await knex("resources").truncate();
  await knex("projects").truncate();
  await knex('projects').insert([
    {
      project_name: "Personal Project Portfolio",
      project_completed: 1,
    },
    {
      project_name: "Minimum Viable Product",
      project_description: "Build an API and write custom middleware that satisfies the requirements listed under the Minimum Viable Product section.",
    },
    {
      project_name: "Data model for a Recipe Book",
      project_description: "Design the data model for a recipe book application",
    },
  ]);

 await knex("resources").insert([
  {
    resource_name: "React",
    resource_description: "This library allows for easy front-end management",
  },
  {
    resource_name: "Express",
    resource_description:"",
  },
  {
    resource_name: "SQLite3",
    resource_description: "This back-end table-based database is a great solution to store data",
  }
]);

await knex("tasks").insert([
  {
    task_description: "create the navbar",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "create all the sections for the front-end",
    task_notes: "do not forget to create a hire me form",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "link my linkedin and github on the website",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "design the front-end in figma",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "check endpoints",
    task_notes: "",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "create middlewear function",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "create database function",
    project_id: 2,
  },
  {
    task_description: "create migrations",
    project_id: 3,
  },
  {
    task_description: "create seeds",
    project_id: 3,
  },
  {
    task_description: "built an API",
    project_id: 3,
  },
]);



await knex("project_resources").insert([
  {
    project_id: 1,
    resource_id: 1,
  },
  {
    project_id: 2,
    resource_id: 1,
  },
  {
    project_id: 2,
    resource_id: 2,
  },
  {
    project_id: 2,
    resource_id: 3,
  },
  {
    project_id: 3,
    resource_id: 1,
  },
  {
    project_id: 3,
    resource_id: 2,
  },
  {
    project_id: 3,
    resource_id: 3,
  },
]);

};
