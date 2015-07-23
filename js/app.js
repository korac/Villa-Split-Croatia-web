var app = angular.module('VillaApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: './views/apartmentA1.html',
		controller: 'apartCont'
	}).when('/apartmentA2', {
		templateUrl: './views/apartmentA2.html',
		controller: 'apartCont'
	}).when('/apartmentA3', {
		templateUrl: './views/apartmentA3.html',
		controller: 'apartCont'
	}).otherwise({
		redirectTo: '/'
	});

}]);

app.controller('controller', ['$scope', function ($scope) {
	$scope.title = "Discover the city of";
}]);

app.controller('apartCont', ['$scope', function($scope){
	$scope.nesto = 0;
}]);

app.directive('flexslider', function () {
  return {
    link: function (scope, element, attrs) {
      element.flexslider({
        animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
      });
    }
  }
});

app.directive('carousel', function () {
  return {
    link: function (scope, element, attrs) {
      element.flexslider({
        animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 210,
	    itemMargin: 5,
	    asNavFor: '#slider'
      });
    }
  }
});