angular.module('Elifoot').factory('Teams', function TeamsFactory($http){

	return {

		getTeam: function(id){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/teams/' + id,
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		},

		getPlayersForTeam: function(team){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/teams/' + team + '/players',
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		}

	};

});