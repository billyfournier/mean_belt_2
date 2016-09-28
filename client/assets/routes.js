console.log('****  routes.js  ****');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController as dC'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'usersController as uC'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'appointmentsController as aC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
