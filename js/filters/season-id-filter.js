angular.module('Torneio').filter('seasonIdFilter', function(){

	return function(url){
		return url.slice(-3);
	};

});