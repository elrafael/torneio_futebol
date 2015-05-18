angular.module('Torneio').factory('Fixtures', function FixturesFactory($http){

	return {

		all: function(){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/fixtures/',
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		},

		getFixturesForDate: function(date){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/fixtures/?timeFrameStart=' + date + '&timeFrameEnd=' + date,
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		},

		getFixturesForTeam: function(team){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/teams/' + team + '/fixtures',
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		}

	};

});