const apiRouter = require('express').Router(),
      projectAPI = require('./project'),
      piAPI = require('./pi'),
      searchAPI = require('./search');
      
apiRouter.get('/projects/:id', projectAPI.getProjectHandler);
apiRouter.delete('/projects/:id', projectAPI.deleteProjectHandler);
apiRouter.post('/projects', projectAPI.createProjectHandler);
apiRouter.get('/projects', projectAPI.getProjectsHandler);

apiRouter.get('/pi/:id', piAPI.getPiHandler)
apiRouter.delete('/pi/:id', piAPI.deletePiHandler)
apiRouter.get('/pi', piAPI.getPisHandler)
apiRouter.post('/pi', piAPI.createPiHandler)

apiRouter.get('/pi/:id/projects/', searchAPI.getPiProjectsHandler);
apiRouter.get('/category/:id', searchAPI.getCategoryProjectsHandler);
apiRouter.get('/search/:text', searchAPI.searchProjectsHandler);

module.exports = apiRouter;