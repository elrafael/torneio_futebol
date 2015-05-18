angular.module('Torneio').directive('pageHeader', function(){

	return {
		restrict: 'E',
		templateUrl: 'templates/directives/page-header.html',
		link: function(scope, element, attrs){
			scope.title = attrs.title || attrs.fallback;
		}
	}

});