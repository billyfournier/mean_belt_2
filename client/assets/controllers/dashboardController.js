myApp.controller('dashboardController', function($scope, $routeParams, $location, userFactory,appFactory) {
  console.log('dashboardContoller()');
  var self = this;

  self.dateNow = new Date();

  userFactory.getUser(function(user){
    self.user = user;
  });

  var getApps = function(){
    appFactory.getAppointments(function(apps){
      self.apps = apps;
      console.log(self.apps);
    })
  }
  getApps();

  if(!self.user){
    $location.path('/login')
  }

  self.new = function(){
    $location.path('/new');
  }

  self.delete = function(id){
    appFactory.delete(id,function(){
      getApps();
      $location.path('/dashboard')
    })
  }




});
