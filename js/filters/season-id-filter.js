angular.module('Elifoot').filter('seasonIdFilter', function(){

	return function(url){
		return url.slice(-3);
	};

});