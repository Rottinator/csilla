(function() {
	"use strict";
	
	angular.module("app", ["ui.bootstrap", "ui.router"])
		.config(function ($urlRouterProvider) {
			$urlRouterProvider.otherwise("/dashboard");
		});
})();