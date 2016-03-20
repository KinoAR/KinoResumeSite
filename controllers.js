
var resumeWebsiteControllers = angular.module('resumeWebsiteControllers', []);

resumeWebsiteControllers.controller('ViewCtrl', ['$scope',
  function($scope) {
    $scope.test = "Test";
  }]);