'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'controllers',
    'ui.bootstrap'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/carousel.html',
                controller: 'MenuCtrl'
            }).
            when('/carousel/:imgId', {
                templateUrl: 'partials/carousel.html',
                controller: 'CarouselCtrl'
            }).
            when('/static/:target', {
                templateUrl: function (urlattr) {
                    return 'partials/' + urlattr.target + '.html';
                },
                controller: 'MenuCtrl'
            }).
            otherwise({
                redirectTo: ''
            });
    }]);

app.factory('myService', function () {
    var imageCategories = {
        'schwangerschaft': ['img/schwangerschaft1.png', 'img/schwangerschaft2.png', 'img/schwangerschaft3.png'],
        'baby': ['img/baby1.png', 'img/baby2.png', 'img/baby3.png'],
        'familie': ['img/schwangerschaft1.png', 'img/schwangerschaft2.png', 'img/schwangerschaft3.png'],
        'portrait': ['img/baby1.png', 'img/baby2.png', 'img/baby3.png']
    };
    var categories = [];
    for (var category in imageCategories) {
        if (imageCategories.hasOwnProperty(category)) {
            categories.push(category)
        }
    }

    return {
        imageCategories: imageCategories,
        categories: categories
    };
});