angular.module('Elifoot').controller('SeasonsTeamsController', function($scope, $routeParams, Seasons){

	$scope.teams = [];
	$scope.league = Seasons.getLeagueName();

	Seasons.getTeamsForSeason($routeParams.id).success(function(data){
		$scope.teams = data.teams;
		console.log($scope.teams);
	});

});