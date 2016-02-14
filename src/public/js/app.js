"use strict";
angular.module("mySite", ["ngRoute", "ngAnimate", "ngSanitize"])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/about", {
        templateUrl: "views/about.html"
    }).when("/portfolio", {
        templateUrl: "views/portfolio.html",
        controller: "portfolioController"
    }).when("/contact", {
        templateUrl: "views/contact.html"
    }).otherwise({
        redirectTo: "/about"
    });
})

.controller("mainController", function ($scope) {

    $scope.onStart = function () {

        // refresh page to get scrollbar to appear on portfolio page
        // http://stackoverflow.com/a/22575897
        document.getElementById("divContainer").style.zoom = 1.0000001;
        setTimeout(function () {
            document.getElementById("divContainer").style.zoom = 1;
        }, 1000);
    }

});
