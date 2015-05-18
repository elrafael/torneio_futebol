angular.module('Torneio').controller('TeamsFixturesController', function($scope, $routeParams, Fixtures, Teams){

	$scope.fixtures = [];
	$scope.team = '';
	$scope.teamImage = '';

	Teams.getTeam($routeParams.id).success(function(data){
		$scope.team = data.name;
		$scope.teamImage = data.crestUrl;
	});

	Fixtures.getFixturesForTeam($routeParams.id).success(function(data){
		$scope.fixtures = data.fixtures;

		for (var i = 0; i < $scope.fixtures.length; i++) {

			var result = $scope.fixtures[i].result;
			var home = $scope.fixtures[i].homeTeamName;
			var away = $scope.fixtures[i].awayTeamName;

			var isHome = (home === $scope.team);
			var diff = result.goalsHomeTeam - result.goalsAwayTeam;

			if(diff === 0){
				$scope.fixtures[i].matchResult = "draw";
			}else if((diff > 0 && isHome) || (diff < 0 && !isHome)){
				$scope.fixtures[i].matchResult = "win";
			}else{
				$scope.fixtures[i].matchResult = "lose";
			}

		};
	});

});