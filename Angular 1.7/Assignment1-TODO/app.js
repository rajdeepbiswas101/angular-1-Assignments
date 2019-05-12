var app = angular.module("Assignment1", []);

app.controller("TodoListController", ['$scope', function ($scope) {
    $scope.Elements = [];
    $scope.Inputs = '';
    $scope.addElement = function () {
        if ($scope.Inputs != '') {
            $scope.Elements.push({ name: $scope.Inputs, isSelected: false });
            $scope.Inputs = '';
            console.log($scope.Elements);
        }
    }
    $scope.removeElement = function () {
        $scope.Elements = $scope.Elements.filter(function (value) {
            return value.isSelected == false;
        })
    }
}])