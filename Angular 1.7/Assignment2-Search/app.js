var app = angular.module("Assignment2", []);

app.controller("SearchController",['$scope', function($scope){
    $scope.Filtered = [];
    $scope.searchText = '';
    $scope.Elements = [
        {
            Name:"Android Tutorials",
            Icon:"assets/android.png"
        },
        {
            Name:"Angular JS",
            Icon:"assets/angular.png"
        },
        {
            Name:"HTML",
            Icon:"assets/html.png"
        },
        {
            Name:"CSS",
            Icon:"assets/css.png"
        },
        {
            Name:"SASS",
            Icon:"assets/sass.png"
        },
    ];
    $scope.Filtered = $scope.Elements;
    $scope.filterElement = function(){
        $scope.Filtered = [];
        $scope.Elements.forEach(element => {
            if(element.Name.toUpperCase().includes($scope.searchText.toUpperCase())){
                $scope.Filtered.push(element);
            }
        });
    }

}])