myApp.controller('newHero', ['$scope', '$http', function ($scope, $http) {
  $scope.new_hero = {};

  $scope.submitNewHero = function () {
    var data = $scope.new_hero;
    console.log(data);
    console.log
    $http.post('/hero', data)
      .then(function () {
        console.log('POST /hero', data);
      });
  };
  
}]);
