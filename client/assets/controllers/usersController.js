myApp.controller('usersController', function($scope, $routeParams, $location, userFactory) {
  console.log('usersContoller()');
  var self = this;

  var getUser = function(){
    userFactory.getUser(function(user){
      self.user = user;
    });
  };
  getUser();

  if(self.user){
    $location.path('/')
  }

  self.login = function(){
    userFactory.login(self.newuser, function(){
      $location.path('/');
    })
  }

  self.logout = function(){
    userFactory.logout(function(){
      $location.path('/login');
    })
  }
});
