const db = require('../../models/');

module.exports = {
  getProjectsHandler: function(req, res) {
    db.Project.findAll()
    .then(projects => res.send(projects, 200))
    .catch(error => res.status(500).send(error));  
  },
  getProjectHandler: function(req, res) {
    db.Project.findOne({ id: re.params.id })
    .then(project => res.send(project, 200))
    .catch(error => res.status(500).send(error));  
  },
  createProjectHandler: function(req, res) {
    db.Project.createOne(req.body)
    .then(project => res.send(project, 200))
    .catch(error => res.status(500).send(error));  
  },
  deleteProjectHandler: function(req, res) {
    db.Project.deleteOne({ id: re.params.id })
    .then(project => res.send(project, 200))
    .catch(error => res.status(500).send(error));  
  }
};