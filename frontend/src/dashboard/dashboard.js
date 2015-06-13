(function() {
	"use strict";
	
	angular.module("app")
		.config(routeConfig)
		.controller("DashboardCtrl", DashboardCtrl);

	function routeConfig ($stateProvider) {
		$stateProvider.state("dashboard", {
			url: "/dashboard",
			views: {
				"main": {
					templateUrl: "/dashboard/dashboard.html",
					controller: "DashboardCtrl"
				}
			}
		});
	}

	function DashboardCtrl($scope, $state) {
		
	}

})();