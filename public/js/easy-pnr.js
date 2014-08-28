var lep = angular.module('lep', ['lep.controllers', 'ngRoute']);

lep.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'
  });
  $routeProvider.when('/edit-header', {
    templateUrl: 'partials/edit-header.html',
    controller: 'EditHeaderController'
  });
  $routeProvider.when('/edit-footer', {
    templateUrl: 'partials/edit-footer.html',
    controller: 'EditFooterController'
  });
}]);
