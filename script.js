var app = angular.module('route', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/cat', {
    templateUrl: 'cat.html',
    controller: 'catController'
  });
  
  $routeProvider.when('/dog', {
    templateUrl: 'dog.html',
    controller: 'dogController'
  });

  $routeProvider.when('/squirrel', {
    templateUrl: 'squirrel.html',
    controller: 'squirrelController'
  });

  $routeProvider.when('/piggy', {
    templateUrl: 'piggy.html',
    controller: 'piggyController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});