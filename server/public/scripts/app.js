var myApp = angular.module('myApp', ["ngRoute"]);
angular.module('myApp.controllers', []);

console.log("Angular App Started");

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/new", {
      templateUrl: "/views/partials/newHero.html"
    }).
    when("/view", {
      templateUrl: "/views/partials/viewHeros.html"
    }).
    otherwise({
      redirectTo: "/view"
    });
}]);
