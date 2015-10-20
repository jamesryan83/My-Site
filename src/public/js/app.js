"use strict";
angular.module("mySite", ["ngRoute", "ngAnimate"])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/home.html"
    }).when("/about", {
        templateUrl: "views/about.html"
    }).when("/contact", {
        templateUrl: "views/contact.html"
    }).otherwise({
        redirectTo: "/"
    });
});;