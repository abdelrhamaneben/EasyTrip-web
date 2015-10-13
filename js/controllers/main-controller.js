var app = angular.module('app', ["ngTouch"]);
app.controller('MainController', ['$scope', '$http',
    function MainController($scope, $http) {
      $http.get('json/activities.json').success(function(data) {
        $scope.categories = data;
      
    });
    $http.get('json/detail.json').then(function(response) {
    	$scope.detail = response;
	});

}]);

app.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            function inputValue(val) {
                if (val) {
                    var digits = val.replace(/[^0-9.]/g, '');

                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseFloat(digits);
                }
                return undefined;
            }            
            ctrl.$parsers.push(inputValue);
        }
    };
}); 

 
        //angular.module('app', ['ngAnimate', 'ui.bootstrap']);
app.controller('dateStart', function ($scope) {
	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.clear = function () {
		$scope.dt = null;
	};
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

	$scope.minDate = "05/05/2014";
	$scope.toggleMin();
	$scope.maxDate = new Date(2020, 5, 22);

	$scope.open = function($event) {
		$scope.status.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];

	$scope.status = {
		opened: false
	};

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var afterTomorrow = new Date();
	afterTomorrow.setDate(tomorrow.getDate() + 2);
	$scope.events =
	[
		{
			date: tomorrow,
			status: 'full'
		},
		{
		    date: afterTomorrow,
		    status: 'partially'
	  	}
	];

	$scope.getDayClass = function(date, mode) {
		if (mode === 'day') {
	  		var dayToCheck = new Date(date).setHours(0,0,0,0);

			for (var i=0;i<$scope.events.length;i++){
	    		var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

				if (dayToCheck === currentDay) {
	      			return $scope.events[i].status;
	    		}
	  		}
		}
	return '';
	};
});