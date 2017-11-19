const db = require('../../models/');

module.exports = {
  getPisHandler: function(req, res) {
    db.Pi.findAll()
    .then(pis => res.send(pis, 200))
    .catch(error => res.send(error, 500));  
  },
  getPiHandler: function(req, res) {
    db.Pi.findOne({ id: re.params.id })
    .then(pi => res.send(pi, 200))
    .catch(error => res.send(error, 500));  
  },
  createPiHandler: function(req, res) {
    db.Pi.createOne(req.body)
    .then(pi => res.send(pi, 200))
    .catch(error => res.send(error, 500));  
  },
  deletePiHandler: function(req, res) {
    db.Pi.deleteOne({ id: re.params.id })
    .then(pi => res.send(pi, 200))
    .catch(error => res.send(error, 500));  
  }
};