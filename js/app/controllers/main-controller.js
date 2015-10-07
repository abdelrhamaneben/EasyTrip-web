app.controller('MainController', ['$scope', '$http',
    function MainController($scope, $http) {
      $http.get('js/json/activities.json').success(function(data) {
        $scope.categories = data;
      
    });
      
    $http.get('js/json/cities_with_countries.json').success(function(data) {
        $scope.cities = data;
      
    });

    $http.get('js/json/detail.json').then(function(response) {
    	$scope.detail = response;
	});

}]);
  