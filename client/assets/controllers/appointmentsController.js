myApp.controller('appointmentsController', function($scope, $routeParams, $location, userFactory, appFactory) {
  console.log('appointmentsContoller()');
  var self = this;

  self.dateNow = new Date();

  var getUser = function(){
    userFactory.getUser(function(user){
      self.user = user;
    });
  };
  getUser();
  var getApps = function(){
    appFactory.getAppointments(function(apps){
      self.apps = apps;
      console.log(self.apps);
    })
  }
  getApps();

  self.cancel = function(){
    $location.path('/dashboard')
  }

  self.make = function(){
    // console.log(self.app.date.toDateString());
    // console.log(new Date(self.apps[0].date).toDateString());
    self.errors = [];
    var count = 0;
    for (var i = 0; i < self.apps.length;i++){
      var newDate = new Date(self.apps[i].date).toDateString();
      if( newDate == self.app.date.toDateString() ){
        count++;
      }
    }
    if(count > 2){
      self.errors.push('Choose another date. No more than 3 appointments per day.')
    }
    if(self.app.date < self.dateNow){
      self.errors.push('Enter a valid date');
    }
    if(self.app.time.getHours() < 8 || self.app.time.getHours() > 17){
      self.errors.push('Enter a valid time between 8:00AM and 5:00PM');
    }
    if(self.app.complaint.length < 11){
      self.errors.push('Complaint must be at least 10 characters');
    }

    if(self.errors.length < 1) {
      self.errors = null;
      self.app.user = self.user.username;
      appFactory.create(self.app, function(){

        $location.path('/dashboard')
      })
    }
  }




});
