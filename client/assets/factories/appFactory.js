console.log('*** appFactory loaded ***');
myApp.factory('appFactory', function($http,$routeParams) {

  var app = JSON.parse(localStorage.getItem('app'));

  function appFactory(){
    var _this = this;

    _this.create = function(app_data, callback){

      $http.post('/app',app_data).then(function(res){
        callback();
      });
    }

    _this.delete = function(id, callback){
      $http.delete('/app/'+id).then(function(returned_data){
        callback();
      })
    }

    _this.getAppointments = function(callback){
      $http.get('/app').then(function(returned_apps){
        // console.log(returned_apps.data.success[0].datetoLocaleTimeString());
        callback(returned_apps.data.success);
      })
    }
  }
  return new appFactory();
});
