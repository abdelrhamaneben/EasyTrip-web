app.controller('MainController', ['$scope', '$http',
    function MainController($scope, $http) {
      $http.get('js/app/controllers/activity/activities.json').success(function(data) {
        $scope.activities = data;
      
    });
      
    $http.get('js/app/controllers/activity/cities_with_countries.json').success(function(data) {
        $scope.cities = data;
      
    });

}]);
  