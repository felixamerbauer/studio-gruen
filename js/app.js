'use strict';

/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'pascalprecht.translate',
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
                redirectTo: '/static/baby'
            });
    }]);

app.factory('myService', function () {
    var imageCategories = {
        'schwangerschaft': ['img/Schwangerschaft_01-Babybauch-Natur-Wien.jpg','img/Schwangerschaft_02-Babybauch-Eltern-Paar-Natur-Wien.jpg','img/Schwangerschaft_03-Babybauch-Geschwister-Natur-Wien.jpg','img/Schwangerschaft_04-Babybauch-Natur-Wien.jpg','img/Schwangerschaft_05-Babybauch-Natur-Wien.jpg','img/Schwangerschaft_06-Babybauch-Natur-Wien.jpg','img/Schwangerschaft_07-Babybauch-Eltern-Paar-Wien.jpg','img/Schwangerschaft_08-Babybauch-Eltern-Paar-Wien.jpg','img/Schwangerschaft_09-Babybauch-Natur-Wien.jpg','img/Schwangerschaft_10-Babybauch-Natur-Wien.jpg'],
        'baby': ['img/Baby_01-Neugeborenenfotografie-Wien.jpg','img/Baby_02-Neugeborenenfotografie-Wien.jpg','img/Baby_03-Neugeborenenfotografie-Wien.jpg','img/Baby_04-Neugeborenenfotografie-Stillen-Wien.jpg','img/Baby_05-Neugeborenenfotografie-Wien.jpg','img/Baby_06-Neugeborenenfotografie-Wien.jpg','img/Baby_07-Neugeborenenfotografie-Familie-Wien.jpg','img/Baby_08-Neugeborenenfotografie-Wien.jpg','img/Baby_09-Neugeborenenfotografie-Wien.jpg','img/Baby_10-Neugeborenenfotografie-Geschwister-Wien.jpg','img/Baby_11-Babyfotografie-Natur-Wien.jpg'],
        'familie': ['img/Familie_01-Familienfotografie-Natur-Mostviertel.jpg','img/Familie_02-Familienfotografie-Natur-Waldviertel.jpg','img/Familie_03-Familienfotografie-Natur-Weinviertel.jpg','img/Familie_04-Familienfotografie-Natur-Wien.jpg','img/Familie_05-Familienfotografie-Natur-Wien.jpg','img/Familie_06-Familienfotografie-Natur-Wien.jpg','img/Familie_07-Familienfotografie-Natur-Niederoesterreich.jpg'],
        'portrait': ['img/Portrait_01-Garten-Selbstversorgung-Niederoesterreich.jpg','img/Portrait_02-Garten-Selbstversorgung-Niederoesterreich.jpg','img/Portrait_03-Garten-Eier-Selbstversorgung-Niederoesterreich.jpg','img/Portrait_04-Styled-Shooting-Jane-Austen-romantisch-Wien.jpg','img/Portrait_05-Styled-Shooting-Jane-Austen-Paar-romantisch-Wien.jpg','img/Portrait_06-Wasser-Sommer-Wien.jpg','img/Portrait_07-Chemotherapie-Linz.jpg'],
        'album': ['img/Album_01-Familienfotografie-Wien.jpg','img/Album_02-Familienfotografie-Wien.jpg','img/Album_03-Familienfotografie-Wien.jpg','img/Album_04-Familienfotografie-Wien.jpg','img/Album_05-Familienfotografie-Wien.jpg','img/Album_06-Familienfotografie-Wien.jpg']
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