console.log('*** userFactory loaded ***');
myApp.factory('userFactory', function($http,$routeParams) {

  var user = JSON.parse(localStorage.getItem('user'));

  function userFactory(){
    var _this = this;

    _this.login = function(user_data,callback){
      localStorage.setItem('user',JSON.stringify(user_data));
      user = user_data;
      callback();
    }

    _this.logout = function(callback){
      localStorage.setItem('user',null);
      user = null;
      callback();
    }

    _this.getUser = function(callback){
      callback(user);
    }
  }
  return new userFactory();
});
