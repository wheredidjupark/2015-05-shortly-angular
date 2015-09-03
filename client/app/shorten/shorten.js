angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(link){
  	console.log("adding the following link:" + $scope.link.url);
  	Links.addLink(link).then(function(){
  		console.log("successfully added" + $scope.link.url);
  	}, function(error){
  		console.log(error);
  	});
  };


});
