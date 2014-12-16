'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'controllers'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/carousel.html',
                controller: 'DummyCtrl'
            }).
            when('/carousel/:imgId', {
                templateUrl: 'partials/carousel.html',
                controller: 'CarouselCtrl'
            }).
            when('/static/:target', {
                templateUrl: function (urlattr) {
                    return 'partials/' + urlattr.target + '.html';
                },
                controller: 'DummyCtrl'
            }).
            otherwise({
                redirectTo: ''
            });
    }]);

//app.service('MathService', function () {
//    this.add = function (a, b) {
//        return a + b
//    };
//
//    this.subtract = function (a, b) {
//        return a - b
//    };
//
//    this.multiply = function (a, b) {
//        return a * b
//    };
//
//    this.divide = function (a, b) {
//        return a / b
//    };
//});

//app.service('ImageDataService', function () {
//    this.imageCategories = ['schwangerschaft', 'baby']
//});