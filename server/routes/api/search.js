const db = require('../../models/');

module.exports = {
  searchProjectsHandler: function(req, res) {
    // TODO : search projects given input text
    db.Project.findAll()
    .then(projects => res.send(projects, 200))
    .catch(error => res.status(500).send(error));  
  },
  getPiProjectsHandler: function(req, res) {
    // TODO : make this get all of PI's projects
    db.Project.findAll({ where: {  }})
    .then(projects => res.send(projects, 200))
    .catch(error => res.status(500).send(error));  
  },
  getCategoryProjectsHandler: function(req, res) {
    // TODO : get projects by category
    db.Pi.findAll()
    .then(pis => res.send(pis, 200))
    .catch(error => res.send(error, 500));  
  }
};