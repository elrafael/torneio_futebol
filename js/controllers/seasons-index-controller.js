angular.module('Elifoot').controller('SeasonsIndexController', function($scope, Seasons){

	$scope.leagues = [];

	$scope.setLeagueName = function(leagueName){
		Seasons.setLeagueName(leagueName);
	};

	Seasons.all().success(function(data){
		$scope.leagues = data;
		console.log($scope.leagues);
	});

});