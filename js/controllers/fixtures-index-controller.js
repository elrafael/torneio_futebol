angular.module('Torneio').controller('FixturesIndexController', function($scope, Fixtures){

	$scope.fixtures = [];
	$scope.date = new Date();

	$scope.setPreviousDay = function(){
		$scope.date.setDate( $scope.date.getDate() - 1 );
		$scope.callData();
	};

	$scope.setNextDay = function(){
		$scope.date.setDate( $scope.date.getDate() + 1 );
		$scope.callData();
	};

	$scope.formatDate = function(){

		var month = $scope.date.getMonth() + 1;
		if(month < 10) month = '0' + month;

		var day = $scope.date.getDate();
		if(day < 10) day = '0' + day;

		return $scope.date.getFullYear() + '-' + month + '-' + day;

	};

	$scope.callData = function(){
		Fixtures.getFixturesForDate( $scope.formatDate() ).success(function(data){
			$scope.fixtures = data.fixtures;
			console.log(data.fixtures);
		});
	};

	$scope.callData();

});