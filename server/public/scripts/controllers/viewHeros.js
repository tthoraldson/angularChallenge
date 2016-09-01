myApp.controller('viewHeros', ['$scope', '$http', function ($scope, $http) {
  $scope.heros = [];
  $scope.displayHeroId = '';

  getHeros();

  function getHeros() {
    $http.get('/hero')
      .then(function (response) {
        console.log('GET /hero', response.data);

        $scope.heros = response.data;
      });
  }

  $scope.deleteHero = function (id) {
  $http.delete('/hero/' + id)
    .then(function () {
      console.log('DELETE /hero/', id);
      getHeros();
    });
};
}]);
