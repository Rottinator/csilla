(function() {
	"use strict";
	
	angular.module("app")
		.config(routeConfig)
		.controller("BookDetailController", BookDetailCtrl);

	function routeConfig($StateProvider) {
		$stateProvider.state("detail", {
			url: "/detail/:bookId",
			views: {
				"main": {
					templateUrl: "/detail/detail.html",
					controller: "BookDetailCtrl"
				}
			}
		});	
	}

	function BookDetailCtrl($scope, $state) {

	}

})();