
var resumeWebsiteControllers = angular.module('resumeWebsiteControllers', ['ngAnimate']);

resumeWebsiteControllers.controller('ViewCtrl', ['$scope',
  function($scope) {

    $scope.projectList = [
      {
        title: 'TrackingProgress', 
       description: "A website created to track progress, using JavaScript, Meteor" + 
       " MongoDB, Bootstrap, and other technologies.",
       imgLink: 'resources/trackingprogress.png'
      },
      {
        title: 'Reotem', 
       description: "A game created to demonstrate the A* pathfinding algorithm, using JavaScript, Meteor" + 
       " MongoDB, Bootstrap, and other technologies.",
       imgLink: 'resources/reotem.png'
      }
      ];
  }]);