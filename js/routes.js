angular.module('Elifoot').config( ['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', { 
			redirectTo: '/home' 
		})

		.when('/home', {
			templateUrl: 'templates/pages/home/index.html'
		})

		.when('/leagues', {
			templateUrl: 'templates/pages/leagues/index.html',
			controller: 'SeasonsIndexController'
		})

		.when('/leagues/:id', {
			templateUrl: 'templates/pages/leagues/teams.html',
			controller: 'SeasonsTeamsController'
		})

		.when('/games', {
			templateUrl: 'templates/pages/games/index.html',
			controller: 'FixturesIndexController'
		})

		.when('/teams/:id/games', {
			templateUrl: 'templates/pages/teams/fixtures.html',
			controller: 'TeamsFixturesController'
		})

		.when('/teams/:id/players', {
			templateUrl: 'templates/pages/teams/players.html',
			controller: 'TeamsPlayersController'
		})

		.when('/about', {
			templateUrl: 'templates/pages/about/index.html'
		})

		.otherwise({
			redirectTo: '/'
		});

}]);