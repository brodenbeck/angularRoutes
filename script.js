var app = angular.module('route', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
  	templateUrl: 'html/mainView.html',
  });

  $routeProvider.when('/cat', {
    templateUrl: 'html/cat.html',
    controller: 'catController'
  });
  
  $routeProvider.when('/dog', {
    templateUrl: 'html/dog.html',
    controller: 'dogController'
  });

  $routeProvider.when('/squirrel', {
    templateUrl: 'html/squirrel.html',
    controller: 'squirrelController'
  });

  $routeProvider.when('/piggy', {
    templateUrl: 'html/piggy.html',
    controller: 'piggyController'
  });

  $routeProvider.otherwise({ 
  	redirectTo: '/404',
  	templateUrl: 'html/404.html', 
  	controller: 'errorController'
  });

});