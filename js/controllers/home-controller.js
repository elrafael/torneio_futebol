angular.module('Torneio').controller('HomeController', function($scope){
    $scope.players = [
        {
            name: 'Um',
            age: 21
        },
        {
            name: 'Dois',
            age: 22
        }
    ];
});