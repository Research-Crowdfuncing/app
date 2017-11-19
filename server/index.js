const express = require('express'),
      models = require('./models/'),
      parser = require('body-parser'),
      morgan = require('morgan'),
      apiRoutes = require('./routes/api/'),
      PORT = process.env.PORT || 3000;

var app = express()
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  .use(express.static('./public'))
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use('/api', apiRoutes);



models.sequelize
  .sync()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

app.listen(PORT, () => console.log(`server is listening at ${PORT}`))
