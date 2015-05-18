angular.module('Elifoot').factory('Seasons', function SeasonsFactory($http){

	return {

		data: {
			leagueName: null
		},

		getLeagueName: function(){
			return this.data.leagueName;
		},

		setLeagueName: function(leagueName){
			this.data.leagueName = leagueName;
		},

		all: function(){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/soccerseasons/',
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		},

		getTeamsForSeason: function(season){
			return $http({
				method: 'GET',
				url: 'http://api.football-data.org/alpha/soccerseasons/' + season + '/teams',
				headers: {
					'X-Auth-Token': '0f504a9a603c4d98bc935bc9428ea4fe'
				}
			});
		}

	};

});