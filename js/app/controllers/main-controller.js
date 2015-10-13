app.controller('MainController', ['$scope', '$http',
    function MainController($scope, $http) {
      $http.get('http://127.0.0.1:1337/category').success(function(data) {
        //$scope.categories = data;
    });
}]);
  