angular.module('Elifoot').controller('TeamsPlayersController', function($scope, $routeParams, Teams){

	$scope.players = [];
	$scope.team = '';
	$scope.teamImage = '';

	Teams.getTeam($routeParams.id).success(function(data){
		$scope.team = data.name;
		$scope.teamImage = data.crestUrl;
	});

	Teams.getPlayersForTeam($routeParams.id).success(function(data){
		$scope.players = data.players;
	});

});