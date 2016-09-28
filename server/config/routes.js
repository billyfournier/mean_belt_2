console.log('**** routes');
var mongoose = require('mongoose');

require('../controllers/appsController.js');  //path to controller file
module.exports = function(app){
  // app.get('/friends', friendsController.index);
  // app.get('/friends/:id', friendsController.show);
  app.get('/app', appsController.index);
  app.post('/app', appsController.create);
  app.delete('/app/:id', appsController.delete);
  // app.put('/friends/:id', friendsController.update);
  // app.delete('/friends/:id', friendsController.delete);
}
