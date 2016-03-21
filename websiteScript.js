
var resumeWebsite = angular.module("resumeWebsite", ['ngRoute', 'ngAnimate', 'resumeWebsiteControllers']);
 
 //App Configuration for routes
resumeWebsite.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/indexContent.html',
      controller: 'ViewCtrl'
    })
    .when('/resumePage', {
      templateUrl:'partials/resumeContent.html',
      controller: 'ViewCtrl'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolioContent.html',
      controller: 'ViewCtrl'
    })
    .when('/contact', {
      templateUrl: 'partials/contactContent.html',
      controller: 'ViewCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(false);
}]);

