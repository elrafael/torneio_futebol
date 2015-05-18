angular.module('Torneio').controller('HomeController', function($scope, Players){
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