// `Proje` modeli buraya

const db = require("../../data/dbConfig");

const booleanHandler = (data) => {
  if (data.length) {
    data.forEach((project) => {
      if (!project.project_completed) {
        project.project_completed = false;
      } else {
        project.project_completed = true;
      }
    });
  } else {
    if (!data.project_completed) {
      data.project_completed = false;
    } else {
      data.project_completed = true;
    }
  }
};

const getProjects = async () => {
  const projects = await db("projects");
  booleanHandler(projects);
  return projects;
};

const createProject = async (project) => {
  const [id] = await db("projects").insert(project);
  const newProject = await db("projects").where("project_id", id).first();
  booleanHandler(newProject);
  return newProject;
};

const deleteProject = async (id) => {
  const deletedProject = await db("projects").where("project_id", id).first();
  booleanHandler(deletedProject);
  await db("projects").where("project_id", id).del();
  return deletedProject;
};

module.exports = {
  getProjects,
  createProject,
  deleteProject,
};